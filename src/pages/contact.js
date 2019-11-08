import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import folds from "../images/folds.png"

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="text-center">
        <img
          alt="folds drawing"
          className="block mx-auto w-1/2"
          src={folds}
        />
        <a href="mailto:caithuls8@gmail.com" target="_top">
          <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
            caithuls8@gmail.com
          </h2>
        </a>
      </section>
    </Layout>
  );
}

export default ContactPage;
