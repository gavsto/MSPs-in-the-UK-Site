import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import HomepageFeatures from "../components/HomepageFeatures"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <span className={styles.eyebrow}>🇬🇧 UK MSPs only</span>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--accent button--lg"
            to="https://discord.gg/xsXC2bnkRq"
          >
            Join the free Discord 👋
          </Link>
          <Link
            className="button button--hero-ghost button--lg"
            to="/docs/intro"
          >
            About the community
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description="A free Discord community specifically for UK MSPs only."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
