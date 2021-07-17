import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'

const HomepageHeader: React.FC = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className="">
      <div className="container">
        <div className={styles.headerContainer}>
          <div className={styles.heroDivContainer}>
            <img alt="KrakenLogo" src="/img/logoAOSPK.png" height="280px" />

            <h1 className={clsx('hero__title', styles.title)}>
              {siteConfig.title}
            </h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Get Started!
              </Link>
            </div>
          </div>

          <div className={styles.screenshotCarrousell}>
            <img
              alt="screenshot_1"
              src="/img/screenshots/01.png"
              height="550px"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
