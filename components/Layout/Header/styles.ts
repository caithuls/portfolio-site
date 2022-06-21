import styled from "styled-components";
import { StringProps, WrapperProps } from "lib/types";
import { devices } from "lib/displayDevice";
import { COLOR_BLACK, COLOR_DARK_GRAY, COLOR_WHITE, COLOR_DARK_PURPLE} from "lib/colorPalette";

import { Flex } from "components/Layout/Container/styles";

export const StickyNav = styled.nav<StringProps>`
  position: top;
  z-index: 0;
  top: 0;
  background-color: ${({ darkTheme }) =>
    darkTheme ? COLOR_DARK_PURPLE : COLOR_WHITE};

  a {
    margin-left: 0.5rem;
    color: ${({ darkTheme }) => (darkTheme ? COLOR_DARK_GRAY : COLOR_DARK_PURPLE)};
    transition: all 0.3s;

    &:hover {
      color: ${({ darkTheme }) => (darkTheme ? COLOR_WHITE : COLOR_BLACK)};
    }
  }

  .active {
    color: ${({ darkTheme }) => (darkTheme ? COLOR_WHITE : COLOR_BLACK)};
  }

  button {
    margin-right: 2rem;
    padding: 0.75rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_WHITE : COLOR_DARK_PURPLE};
  }

  hr {
    width: 100%;
    margin-bottom: 1rem;
    border-top-width: 2px;
    height: 0;
    border-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_WHITE : COLOR_BLACK};
  }
`;

export const Wrapper = styled(Flex)<WrapperProps>`
  position: relative;
  padding: 2rem 0;

  a:not(:first-child) {
    padding: 1rem;
  }

  a:first-child {
    padding-right: 1rem;
  }

  @media ${devices.mobileL} {
    padding: 2rem 0;

    a:last-child {
      display: none;
    }
  }
`;
