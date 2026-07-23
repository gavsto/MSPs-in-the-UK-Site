# Dockerised dev environment

A fully self-contained Docker dev environment for this Docusaurus 2 site. Node,
npm, and all `node_modules` live **inside Docker** — nothing is installed on your
host, and dependencies never touch your host filesystem. Your source is bind-mounted
in, so edits save to your real files and hot reload works.

**Node 20 LTS** is used — the recommended runtime for Docusaurus 3.

## Quick start

From this folder:

```bash
docker compose up -d      # build (first time) + start in the background
```

Open <http://localhost:3000>. Edit files in your editor as normal — saves
hot-reload into the running container. Then:

```bash
docker compose logs -f    # watch the dev server output
docker compose down       # stop and remove the container
```

The stack has `restart: unless-stopped`, so it comes back automatically after a
reboot until you explicitly run `docker compose down`.

## Everyday commands

| Task | Command (run from this folder) |
|------|--------------------------------|
| Start | `docker compose up -d` |
| Stop | `docker compose down` |
| Live logs | `docker compose logs -f` |
| Restart | `docker compose restart` |
| Rebuild after changing `package.json` or the `Dockerfile` | `docker compose up -d --build` |
| Reset dependencies (forces a clean `npm ci` on next start) | `docker compose down` then `docker volume rm msps-in-the-uk-dev_node_modules` |

## Managing it from Portainer (optional)

Portainer runs its own Compose engine, so it works independently of the host CLI.
Because Portainer's **Web editor** stacks have no build context, either:

- **Repository / Upload method** (recommended): point Portainer at this folder/repo
  so it has the `Dockerfile` — the `build:` section in `docker-compose.yml` then
  works as-is. Deploy the stack and manage start/stop from the Portainer UI.
- **Or** just start it once from the CLI (`docker compose up -d`); the container
  shows up in Portainer, where you can stop/start/inspect it.

## Files

| File | Purpose |
|------|---------|
| `docker-compose.yml` | The stack — start it with `docker compose up -d`. |
| `Dockerfile` | The environment: Node 20, deps baked in, runs as non-root `node`. |
| `docker-entrypoint.sh` | Installs deps into the volume if empty, then starts the dev server. |
| `.dockerignore` | Keeps host `node_modules`/`build` out of the image. |

## How the isolation works

- **Source** → bind-mounted from this folder (`.:/workspace`) for live edits + hot reload.
- **`node_modules`** → a named Docker volume, so container deps never touch the host.
- Container runs as user **`node` (uid 1000)**, matching your host user, so any files
  it writes into the bind mount stay owned by you.
- Hot reload uses polling (`CHOKIDAR_USEPOLLING` + `--poll`), which is reliable across
  the Docker bind mount.

## Note on VSCode "Reopen in Container"

This repo intentionally does **not** ship a `.devcontainer/` config. VSCode's Dev
Containers feature needs a native (`.deb`) VSCode install — the Flatpak build is
sandboxed and can't reach the Docker socket. With the `docker compose` workflow
above you get the same fully-isolated, hot-reloading site regardless of how VSCode
is installed; you just edit files normally rather than running VSCode *inside* the
container. If you later switch to native VSCode and want the in-container terminal
experience, add a `.devcontainer/devcontainer.json` that builds from this `Dockerfile`.
