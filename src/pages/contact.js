import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = props => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      title="Contact"
    />
    <section className="text-center">
      <Img 
        className="block mx-auto w-1/2"
        fluid={props.data.folds.childImageSharp.fluid} 
        alt="folds drawing"
      />
      <a href="mailto:caithuls8@gmail.com" target="_top">
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          caithuls8@gmail.com
        </h2>
      </a>
    </section>
  </Layout>
)

export default ContactPage;

export const pageQuery = graphql`
  query {
    folds: file(relativePath: { eq: "folds.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;