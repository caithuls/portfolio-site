import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ArtPage = props => (
    <Layout>
      <SEO
        keywords={[`art`, `paint`, `draw`]}
        title="Art"
      />
      <div class="flex flex-wrap mt-2 mx-1">
        <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
          <div className="rounded overflow-hidden shadow-lg">
            <Img 
              className="w-full"
              fluid={props.data.growth.childImageSharp.fluid} 
              alt={props.data.growth.name}
            />
            <div className="px-6 py-2">
              <div className="font-bold text-md text-center mb-2">Growth</div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
          <div className="rounded overflow-hidden shadow-lg">
            <Img 
              className="w-full"
              fluid={props.data.chaos.childImageSharp.fluid} 
              alt={props.data.chaos.name}
            />
            <div className="px-6 py-2">
              <div className="font-bold text-md text-center mb-2">Chaos</div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
          <div className="rounded overflow-hidden shadow-lg">
            <Img 
              className="w-full"
              fluid={props.data.wave.childImageSharp.fluid} 
              alt={props.data.wave.name}
            />
            <div className="px-6 py-2">
              <div className="font-bold text-md text-center mb-2">Wave</div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
          <div className="rounded overflow-hidden shadow-lg">
            <Img 
              className="w-full"
              fluid={props.data.bend.childImageSharp.fluid} 
              alt={props.data.bend.name}
            />
            <div className="px-6 py-2">
              <div className="font-bold text-md text-center mb-2">Bend</div>
            </div>
          </div>
        </div>
      </div> 
    </Layout>
)

export default ArtPage;

export const pageQuery = graphql`
  query {
    growth: file(relativePath: { eq: "art/growth.png" }) {
      name
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    chaos: file(relativePath: { eq: "art/chaos.png" }) {
      name
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wave: file(relativePath: { eq: "art/wave.png" }) {
      name
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bend: file(relativePath: { eq: "art/bend.png" }) {
      name
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;