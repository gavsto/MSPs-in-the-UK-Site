import React from "react"
import clsx from "clsx"
import styles from "./HomepageFeatures.module.css"

const FeatureList = [
  {
    title: "For UK MSPs",
    Svg: require("../../static/img/rules.svg").default,
    description: <>You'll find hundreds of UK MSPs within the community</>,
  },
  {
    title: "For Vendors",
    Svg: require("../../static/img/vendors.svg").default,
    description: (
      <>We welcome vendors who are GDPR compliant to be part of our community</>
    ),
  },
  {
    title: "Our TLP System",
    Svg: require("../../static/img/trafficlight.svg").default,
    description: (
      <>
        Contribute and build up trust, building your rankings and getting access
        to more sensitive and confidential resources and discussions
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
