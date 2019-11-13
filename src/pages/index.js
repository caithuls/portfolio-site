import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import folds from "../images/folds.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`, 'caitlin hulsey', 'caithuls']}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="folds drawing"
          className="block mx-auto w-1/2"
          src={folds}
        />
        <h2 className="bg-green-400 text-2xl font-bold inline-block my-8 p-3">
          code, comedy, arts
        </h2>
      </section>
    </Layout>
  );
}

export default IndexPage;
