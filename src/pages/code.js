import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function CodePage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Code"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">

        </div>

      </section>
    </Layout>
  );
}

export default CodePage;
