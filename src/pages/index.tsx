import React, { useState } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import Slider from 'react-slick'
import { v4 } from 'uuid'

const HomepageHeader: React.FC = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext()

  const [sliderImages, _setSliderImages] = useState([
    {
      alt: 'screenshot_1',
      src: '/img/screenshots/01.png',
    },
    {
      alt: 'screenshot_2',
      src: '/img/screenshots/02.png',
    },
    {
      alt: 'screenshot_3',
      src: '/img/screenshots/03.png',
    },
    {
      alt: 'screenshot_4',
      src: '/img/screenshots/04.png',
    },
  ])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <header className="header">
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
            <Slider {...settings}>
              {sliderImages.map((screenshot, _idx) => (
                <div key={v4()}>
                  <img alt={screenshot.alt} src={screenshot.src} />
                </div>
              ))}
            </Slider>
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
