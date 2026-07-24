import React from "react"
import clsx from "clsx"
import styles from "./HomepageFeatures.module.css"

const FeatureList = [
  {
    title: "For UK MSPs",
    Svg: require("../../static/img/rules.svg").default,
    description: <>You'll find hundreds of UK MSPs within the community.</>,
  },
  {
    title: "For Vendors",
    Svg: require("../../static/img/vendors.svg").default,
    description: (
      <>We welcome vendors who are GDPR compliant to be part of our community.</>
    ),
  },
  {
    title: "Our TLP System",
    Svg: require("../../static/img/trafficlight.svg").default,
    description: (
      <>
        Contribute and build trust, growing your ranking to unlock more
        sensitive and confidential resources and discussions.
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <div className={styles.card}>
        <div className={styles.iconWrap}>
          <Svg className={styles.featureSvg} role="img" aria-label={title} />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Why join?</h2>
          <p className={styles.sectionSubtitle}>
            A trusted, UK-only space to connect, share and level up.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
