import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = props => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`, 'caitlin hulsey', 'caithuls']}
      title="Home"
    />

    <section className="text-center">
      <Img 
        className="block mx-auto w-1/2"
        fluid={props.data.folds.childImageSharp.fluid} 
        alt="folds drawing"
      />
      <h2 className="bg-green-400 text-2xl font-bold inline-block my-8 p-3">
        code, comedy, arts
      </h2>
    </section>
  </Layout>
)

export default IndexPage;

export const pageQuery = graphql`
  query {
    folds: file(relativePath: { eq: "folds.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;