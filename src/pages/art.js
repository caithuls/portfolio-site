import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import artList from "../data/art.json";

const ArtPage = props => (
  <Layout>
    <SEO
      keywords={['caitlin hulsey', 'caithuls', `art`, `paint`, `draw`]}
      title="Art"
    />
    <div class="flex flex-wrap mt-2 mx-1">
      {artList.map(art => {
        const image = props.data.artImages.edges.find(n => {
          return n.node.relativePath === art.img;
        });
        if (typeof image !== undefined ) {
          return (
          <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
            <div className="rounded overflow-hidden shadow-lg">
              <Img
                className="w-full"
                fluid={image.node.childImageSharp.fluid}
              />
              <div className="px-6 py-2 flex text-center">
                <div className="w-full font-bold text-md text-center mb-2">{art.name}</div>
              </div>
            </div>
          </div>
          ); 
        }
        else return null
      })}
    </div> 
  </Layout>
)

export default ArtPage;

export const query = graphql`
query {
  artImages: allFile( 
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