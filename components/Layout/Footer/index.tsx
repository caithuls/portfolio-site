import { Navigation } from "components/Layout/Navigation";
import { ExternalLinkProps, StringProps } from "lib/types";
import { ScrollToTop } from "components/Layout/ScrollToTop";
import { MdEmail } from 'react-icons/md';
import { FaEtsy } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import { Flex, StyledContainer } from "components/Layout/Container/styles";
import {
  FooterContainer,
  GridContainer,
  FlexLinks,
} from "components/Layout/Footer/styles";

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export const Footer = ({ darkTheme }: StringProps) => {
  return (
    <FooterContainer darkTheme={darkTheme}>
      <StyledContainer>
        <Flex justify="center" direction="column">
          <hr />
          <GridContainer>
            <FlexLinks>
              <a href="mailto:caithuls8@gmail.com" title="Email">
                <i><MdEmail size="40" /></i>
              </a>
              <a href="https://www.etsy.com/shop/caithuls" title="Etsy">
                <i><FaEtsy size="40" /></i>
              </a>
              <a href="https://twitter.com/caithuls" title="Twitter">
                <i><FaTwitter size="40" /></i>
              </a>
              <a href="https://www.instagram.com/caithuls/" title="Instagram">
                <i><FaInstagram size="40" /></i>
              </a>
              </FlexLinks>
            <p>Caitlin Hulsey 2022</p>
          </GridContainer>
          <ScrollToTop darkTheme={darkTheme} />
        </Flex>
      </StyledContainer>
    </FooterContainer>
  );
};
