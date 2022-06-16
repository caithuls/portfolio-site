import Container from "components/Layout/Container";
import { Flex } from "components/Layout/Container/styles";
import  Image  from "next/image";
import { StringProps } from "lib/types";
import { devices } from "lib/displayDevice";
import styled from "styled-components";
import AboutPicture from "../public/assets/png/Caitlin.png";

export default function About() {
  return (
    <Container title="About">
      <HeroFlex align="flex-start">
        <Image
          src={AboutPicture}
          alt="Picture of Caitlin"
          width="200px"
          height="200px"
        />
        <ContentWrapper>

      <p>Caitlin Hulsey is a visual artist from South Carolina. 
        She uses acrylic paint, pens, and bold strokes to create textured pieces. 
        Caitlin also has a B.S. in Computer Science and experience in software and web development.
        Caitlin is passionate about comedy, technology, and mostly importantly, TV. 
        She also writes jokes which can be seen on 
        <a href="https://twitter.com/caithuls/timelines/1083368500192821248" title="Twitter"> Twitter</a>,
        <a href="https://www.buzzfeed.com/ajanibazile/funniest-tweets-2022-so-far" title="Buzzfeed"> Buzzfeed</a>,
        and <a href="https://www.huffpost.com/entry/funniest-tweets-from-women-march-26-april-1_n_62463c3fe4b0587dee675737" title="Huffpost"> HuffPost</a>.
      </p>
      <h3>Art shop coming soon!</h3>
      </ContentWrapper>
      </HeroFlex>
    </Container>
  );
}

export const ContentWrapper = styled.div<StringProps>`
  margin-left: 2rem;

  h1,
  h2 {
    margin-top: 5rem;
    margin-right: 8rem;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  p {
    max-width: 65ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;