import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main style={{ textAlign: "center", paddingTop: "100px" }}>
        <a
          href="/docs/category/general"
          style={{
            backgroundColor: "var(--ifm-color-primary)",
            fontSize: "30px",
            color: "white",
            textAlign: "center",
            padding: "30px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          Get Started
        </a>
      </main>
    </Layout>
  );
}
