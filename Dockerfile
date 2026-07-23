# Development image for the MSPs-in-the-UK Docusaurus 2 site.
#
# You normally don't build this by hand — `docker compose up -d` does it for you
# (see DOCKER-DEV.md). To build it directly:
#     docker build -t msps-in-the-uk-dev:latest .
#
# Node 20 LTS — the recommended runtime for Docusaurus 3.
FROM node:20-bookworm

ENV NODE_ENV=development \
    CHOKIDAR_USEPOLLING=true

WORKDIR /workspace

# Own the workspace as the non-root 'node' user (uid 1000 — matches the host user),
# so files created via the bind mount are owned by you, not root.
RUN chown -R node:node /workspace
USER node

# Install dependencies first for better layer caching. These get baked into the
# image and copied into the node_modules named volume on first run.
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

# App source. When run via docker compose this is overlaid by a bind mount of your
# live working copy; it is only used when running the image standalone.
COPY --chown=node:node . .

# Entrypoint lives outside /workspace so the bind mount can't mask it or strip +x.
USER root
COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
USER node

EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
