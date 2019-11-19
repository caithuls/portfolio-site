import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = props => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      title="About"
    />

    <section className="flex flex-col md:flex-row items-center">
      <figure className="w-2/3 md:w-1/3">
        <Img 
          fluid={props.data.josh.childImageSharp.fluid} 
          alt="folds drawing"
        />
      </figure>
      <div className="md:w-2/3 md:mr-8">
        <p className="leading-loose mb-8">
        Hi, I'm Caitlin Hulsey. I'm a programmer, writer, and artist. 
        I studied computer science in school and love design and problem solving. 
        I also draw, paint, and write. I like comedy, mornings, dogs, and fresh air. 
        </p>
      </div>
    </section>
  </Layout>
)

export default AboutPage;

export const pageQuery = graphql`
  query {
    josh: file(relativePath: { eq: "josh.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
