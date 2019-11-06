import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import josh from "../images/josh.png";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">

        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={josh} />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
