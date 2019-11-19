import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import artList from "../data/art.json";

const ArtPage = props => (
  <Layout>
    <SEO
      keywords={[`art`, `paint`, `draw`]}
      title="Art"
    />
    <div class="flex flex-wrap mt-2 mx-1">
      {props.data.artImages.edges.map(img => {
        return (
        <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
          <div className="rounded overflow-hidden shadow-lg">
            <Img
              className="w-full"
              fluid={img.node.childImageSharp.fluid}
            />
            <div className="px-6 py-2">
              <div className="font-bold text-md text-center mb-2">{img.node.name}</div>
            </div>
          </div>
        </div>
        ); 
      })}
    </div> 
  </Layout>
)

export default ArtPage;

export const query = graphql`
query {
  artImages: allFile( 
    sort: { order: ASC, fields: [birthTime] }
    filter: { relativePath: { regex: "/art/.*.png/" } } ) 
  {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  } 
}
`;