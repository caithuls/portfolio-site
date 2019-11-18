import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import waveImg from "../images/art/wave.png";
import chaosImg from "../images/art/chaos.png";
import growthImg from "../images/art/growth.png";
import bendImg from "../images/art/bend.png";

const ArtPage = props => (
    <Layout>
      <SEO
        keywords={[`art`, `paint`, `draw`]}
        title="Art"
      />
      <div class="flex flex-wrap mt-2 mx-1">
        <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={growthImg}
              alt="Growth"
            />
            <div className="px-6 py-2">
              <div className="font-bold text-md text-center mb-2">Growth</div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={chaosImg}
              alt="Chaos"
            />
            <div className="px-6 py-2">
              <div className="font-bold text-md text-center mb-2">Chaos</div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={waveImg}
              alt="Wave"
            />
            <div className="px-6 py-2">
              <div className="font-bold text-md text-center mb-2">Wave</div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 px-2 my-2">
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={bendImg}
              alt="Bend"
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