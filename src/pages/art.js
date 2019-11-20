import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ReactModal from 'react-modal';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaExpand } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import artList from "../data/art.json";

class ArtPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.arts = [];
    this.art = {img: null, name: "test"};

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal(btnName){
    this.setState({ showModal: true });
    const current = this.arts.find(n => {
      return n.name === btnName;
    });
    this.art = current;
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Layout>
        <SEO
          keywords={['caitlin hulsey', 'caithuls', `art`, `paint`, `draw`]}
          title="Art"
        />
        
        <div class="flex flex-wrap mt-2 mx-1">
          <div>
            <ReactModal 
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
            >
              <div className="float-right">
                <button onClick={this.handleCloseModal}>
                    <MdClose />
                </button>
              </div>
              <div className="px-6 py-2 flex">
                <div className="font-bold text-md text-center mb-2">
                  {this.art.name}
                </div>
                &nbsp;
                <div className="text-md text-center mb-2">
                  {this.art.size}
                </div>
              </div>
              <Img
                className="w-full"
                fluid={this.art.img}
              />
            </ReactModal>
          </div>
          <div className="flex flex-wrap mt-2 mx-1">
            {artList.map(art => {
              const image = this.props.data.artImages.edges.find(n => {
                return n.node.relativePath === art.img;
              });
              if (typeof image !== undefined ) {
                const curImg = image.node.childImageSharp.fluid;
                const curName = art.name;
                const curSize = art.size;
                const toAdd = {img: curImg, name: curName, size:curSize}
                this.arts.push(toAdd);
                this.art = curName;
                return (
                  <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
                    <div className="rounded overflow-hidden shadow-lg">
                      <Img
                        className="w-full"
                        fluid={curImg}
                      />
                      <div className="px-6 py-2 flex text-center">
                        <div className="w-full font-bold text-md text-center mb-2">{curName}</div>
                        <div class="p-1">
                              <button onClick={() => this.handleOpenModal(curName)}>
                                  <FaExpand />
                              </button>
                          </div>
                      </div>
                    </div>
                  </div>
                ); 
              }
              else return null
            })}
          </div> 
        </div>
      </Layout>
    );
  }
}

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
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  } 
}
`;