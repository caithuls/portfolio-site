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
      <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={josh} />
        </figure>
        <div className="md:w-2/3 md:mr-8">
          <p className="leading-loose mb-8">
          Hi, I'm Caitlin Hulsey. I'm a programmer, writer, and artist. 
          I studied computer science in school and love design and problem solving. 
          I also draw, paint, and write. I like comedy, dogs, and fresh air. 
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
