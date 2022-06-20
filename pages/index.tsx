import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Container from "components/Layout/Container";
import { StringProps } from "lib/types";
import { devices } from "lib/displayDevice";
import { Flex } from "components/Layout/Container/styles";
import ProfilePicture from "public/assets/png/Folds.png";

export default function Home() {
  return (
    
    <Container>
      <HeroFlex align="flex-start">
      <ContentWrapper>
        <Image
          src={ProfilePicture}
          alt="Picture of Caitlin's Art"
          width="300px"
          height="300px"
        />
        </ContentWrapper>
        <ContentWrapper> 
          <h1>Caitlin Hulsey</h1>
          <h2>artist, programmer, writer</h2>
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
