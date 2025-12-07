import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import ImageGallery from '@site/src/components/ImageGallery';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Reading Textbook - 12 Chapters 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const roboticsImages = [
    {
      src: '/img/gallery/robot-visualization.svg',
      alt: 'Humanoid Robot',
      caption: 'Advanced Humanoid Robot Design'
    },
    {
      src: '/img/gallery/ros2-communication.svg',
      alt: 'ROS2 Architecture',
      caption: 'ROS2 Communication Patterns'
    },
    {
      src: '/img/gallery/sensor-data.svg',
      alt: 'Sensor Fusion',
      caption: 'Multi-sensor Data Processing'
    },
    {
      src: '/img/gallery/motion-planning.svg',
      alt: 'Motion Planning',
      caption: 'Path Planning Algorithms'
    }
  ];

  return (
    <Layout
      title={`Physical AI & Humanoid Robotics Textbook`}
      description="Comprehensive Guide to Robotics, AI, and Simulation">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.gallerySection}>
          <div className="container padding-horiz--md">
            <h2 className={clsx('margin-bottom--lg', styles.galleryTitle)}>Explore Robotics Concepts</h2>
            <ImageGallery title="Robotics Learning Examples" images={roboticsImages} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
