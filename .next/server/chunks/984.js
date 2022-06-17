"use strict";
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 7984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Layout/Navigation/index.tsx




const Navigation = ({ href , text  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: router.pathname == href ? "active" : "",
            rel: "noopener noreferrer",
            children: text
        })
    });
};
const StyledLink = external_styled_components_default()((link_default()))`
  text-transform: capitalize;
`;

// EXTERNAL MODULE: ./lib/colorPalette.ts
var colorPalette = __webpack_require__(3095);
// EXTERNAL MODULE: ./lib/displayDevice.ts
var displayDevice = __webpack_require__(9893);
// EXTERNAL MODULE: ./components/Layout/Container/styles.ts
var styles = __webpack_require__(3856);
;// CONCATENATED MODULE: ./components/Layout/Header/styles.ts




const StickyNav = (external_styled_components_default()).nav`
  position: top;
  z-index: 0;
  top: 0;
  background-color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_DARK_PURPLE */.Xn : colorPalette/* COLOR_WHITE */.Yf
};

  a {
    margin-left: 2rem;
    color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_DARK_GRAY */.TP : colorPalette/* COLOR_DARK_PURPLE */.Xn
};
    transition: all 0.3s;

    &:hover {
      color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx
};
    }
  }

  .active {
    color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx
};
  }

  button {
    margin-right: 2rem;
    padding: 0.75rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_DARK_PURPLE */.Xn
};
  }

  hr {
    width: 100%;
    margin-bottom: 1rem;
    border-top-width: 2px;
    height: 0;
    border-color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx
};
  }
`;
const Wrapper = external_styled_components_default()(styles/* Flex */.kC)`
  position: relative;
  padding: 3rem 0;

  a:not(:first-child) {
    padding: 1rem;
  }

  a:first-child {
    padding-right: 1rem;
  }

  @media ${displayDevice/* devices.mobileL */.H.mobileL} {
    padding: 2rem 0;

    a:last-child {
      display: none;
    }
  }
`;

;// CONCATENATED MODULE: ./components/Layout/Header/index.tsx




const Header = ({ darkTheme , changeTheme  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StickyNav, {
        darkTheme: darkTheme,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                                href: "/",
                                text: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                                href: "/about",
                                text: "About"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: changeTheme,
                        "aria-label": "change-theme",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: darkTheme ? colorPalette/* COLOR_DARK_PURPLE */.Xn : colorPalette/* COLOR_WHITE */.Yf,
                            stroke: darkTheme ? colorPalette/* COLOR_DARK_PURPLE */.Xn : colorPalette/* COLOR_WHITE */.Yf,
                            children: darkTheme ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
        ]
    });
};

;// CONCATENATED MODULE: ./components/Layout/ScrollToTop/styles.ts


const ScrollUpContainer = (external_styled_components_default()).div`
  padding: 12px 13px;
  width: max-content;
  cursor: pointer;
  background-color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx
};
  text-align: center;
  align-items: center;
  display: flex;
  border-radius: 50%;

  svg {
    width: 15px;
    height: 15px;

    path {
      stroke: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_BLACK */.Sx : colorPalette/* COLOR_WHITE */.Yf
};
    }
  }
`;

;// CONCATENATED MODULE: ./components/Layout/ScrollToTop/index.tsx


const ScrollToTop = ({ darkTheme  })=>{
    const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ScrollUpContainer, {
        onClick: scrollUp,
        darkTheme: darkTheme,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 9.887 5.943",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                id: "Path_157",
                "data-name": "Path 157",
                d: "M6502.544,2805l3.529,3.53-3.529,3.529",
                transform: "translate(-2803.586 6507.073) rotate(-90)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                fill: "none"
            })
        })
    });
};
/* harmony default export */ const Layout_ScrollToTop = ((/* unused pure expression or super */ null && (ScrollToTop)));

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/Layout/Footer/styles.tsx



const FooterContainer = (external_styled_components_default()).footer`
  margin-bottom: 2rem;

  hr {
    width: 100%;
    margin-bottom: 1rem;
    border-top-width: 2px;
    height: 0;
    border-color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx
};
  }

  i {
    margin-top: 1rem;
    margin-left: 0rem;
  }

  p {
    color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_DARK_GRAY */.TP : colorPalette/* COLOR_DARK_PURPLE */.Xn
};
    position: absolute;
    right: 0px;
    vertical-align: middle;

  }

  a {
    margin-left: 2rem;
    color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_DARK_GRAY */.TP : colorPalette/* COLOR_DARK_PURPLE */.Xn
};
    transition: all 0.3s;

    &:hover {
      color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx
};
    }
  }

  .active {
    color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx
};
  }
`;
const GridContainer = (external_styled_components_default()).div`
  padding-bottom: 4rem;
  gap: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media ${displayDevice/* devices.tabletM */.H.tabletM} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const FlexLinks = (external_styled_components_default()).div`
  flex-direction: row;
  display: flex;

  a {
    margin-top: 1rem;
  }
`;

;// CONCATENATED MODULE: ./components/Layout/Footer/index.tsx








const ExternalLink = ({ href , children  })=>/*#__PURE__*/ _jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        children: children
    })
;
const Footer = ({ darkTheme  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(FooterContainer, {
        darkTheme: darkTheme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(styles/* StyledContainer */.PQ, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* Flex */.kC, {
                justify: "center",
                direction: "column",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FlexLinks, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:caithuls8@gmail.com",
                                        title: "Email",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdEmail, {
                                                size: "40"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.etsy.com/shop/caithuls",
                                        title: "Etsy",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaEtsy, {
                                                size: "40"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://twitter.com/caithuls",
                                        title: "Twitter",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {
                                                size: "40"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.instagram.com/caithuls/",
                                        title: "Instagram",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaInstagram, {
                                                size: "40"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Caitlin Hulsey 2022"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTop, {
                        darkTheme: darkTheme
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Layout/Container/index.tsx








function Container({ children , ...customMeta }) {
    const router = (0,router_.useRouter)();
    const meta = {
        title: "Caitlin Hulsey",
        description: `artist, programmer, writer`,
        image: "/assets/png/folds.png",
        type: "website",
        ...customMeta
    };
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { resolvedTheme , setTheme  } = (0,external_next_themes_.useTheme)();
    const darkTheme = resolvedTheme === "dark";
    (0,external_react_.useEffect)(()=>setMounted(true)
    , []);
    const changeTheme = ()=>{
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "follow, index"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: meta.description,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `https://caithuls.com${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: `https://caithuls.com${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/assets/png/folds.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: meta.type
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Caitlin Hulsey"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: meta.image
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:alt",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@caithuls"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: meta.image
                    }),
                    meta.date && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "article:published_time",
                        content: meta.date
                    })
                ]
            }),
            mounted && /*#__PURE__*/ jsx_runtime_.jsx(styles/* Section */.$0, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(styles/* SectionWrapper */.Uq, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(styles/* SectionGrid */.K3, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* StyledContainer */.PQ, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(styles/* StyledHTML */.o_, {
                                    darkTheme: darkTheme
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                                    changeTheme: changeTheme,
                                    darkTheme: darkTheme
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(styles/* Main */.or, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(styles/* StyledContainer */.PQ, {
                                        children: children
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                                    darkTheme: darkTheme
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 3856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$0": () => (/* binding */ Section),
/* harmony export */   "K3": () => (/* binding */ SectionGrid),
/* harmony export */   "PQ": () => (/* binding */ StyledContainer),
/* harmony export */   "Uq": () => (/* binding */ SectionWrapper),
/* harmony export */   "kC": () => (/* binding */ Flex),
/* harmony export */   "o_": () => (/* binding */ StyledHTML),
/* harmony export */   "or": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9893);
/* harmony import */ var lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);



const Section = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  display: grid;
  grid-template-columns:
    minmax(6rem, auto) minmax(0, 78rem)
    minmax(6rem, auto);
  grid-gap: calc(12rem * 0.75) 0;
  gap: calc(12rem * 0.75) 0;

  @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__/* .devices.desktopM */ .H.desktopM} {
    grid-template-columns:
      minmax(4.5rem, auto) minmax(0, 78rem)
      minmax(4.5rem, auto);
  }

  @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__/* .devices.tabletM */ .H.tabletM} {
    grid-template-columns:
      minmax(3rem, auto) minmax(0, 78rem)
      minmax(3rem, auto);
  }

  @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__/* .devices.mobileL */ .H.mobileL} {
    display: grid;
    grid-template-columns:
      minmax(1.5rem, auto) minmax(0, 78rem)
      minmax(1.5rem, auto);
    grid-gap: 3rem 0;
    gap: 3rem 0;
  }
`;
const SectionWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  grid-column: 2;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3rem;
  gap: 3rem;
  grid-auto-flow: dense;

  @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__/* .devices.tabletM */ .H.tabletM} {
    grid-template-columns: none;
    grid-gap: 0;
    gap: 0;
  }
`;
const SectionGrid = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-column: 1/13;
  display: grid;
`;
const Flex = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  align-items: ${({ align  })=>align ? align : "center"
};
  justify-content: ${({ justify  })=>justify ? justify : "space-between"
};
  flex-direction: ${({ direction  })=>direction ? direction : "row"
};
`;
const StyledContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
`;
const Main = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().main)`
  margin: 2rem auto;
  max-width: 55rem;
  width: 100%;

  h2 {
    margin-bottom: 4rem;
  }
`;
const StyledHTML = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle` 
  body {
      background-color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_DARK_PURPLE */ .Xn : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_WHITE */ .Yf
};

    strong, .color-black {
      color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_WHITE */ .Yf : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_DARK_PURPLE */ .Xn
};
      &:hover {
        text-decoration: none;
        outline: none;
      }
    }

    pre {
      background-color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_LIGHT_CREAM */ .bO
};
      color: ${lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx};

      strong {
          color: ${lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx};
      }
    }

    button {
        background-color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_WHITE */ .Yf : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_DARK_PURPLE */ .Xn
};
        color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_DARK_PURPLE */ .Xn : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_WHITE */ .Yf
};
    }

    h2, h5 {
      color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_LIGHT_GRAY */ .RE : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_DARK_PURPLE */ .Xn
};
    }
    
    a {
      color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_WHITE */ .Yf : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLUE */ .pI
};
    }

    ul, p, span {
      color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_DARK_GRAY */ .TP : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx
};
    }
    
    a:hover, .active {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 6px;
    }
}`;


/***/ }),

/***/ 3095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RE": () => (/* binding */ COLOR_LIGHT_GRAY),
/* harmony export */   "Sx": () => (/* binding */ COLOR_BLACK),
/* harmony export */   "TP": () => (/* binding */ COLOR_DARK_GRAY),
/* harmony export */   "Xn": () => (/* binding */ COLOR_DARK_PURPLE),
/* harmony export */   "Yf": () => (/* binding */ COLOR_WHITE),
/* harmony export */   "bO": () => (/* binding */ COLOR_LIGHT_CREAM),
/* harmony export */   "pI": () => (/* binding */ COLOR_BLUE)
/* harmony export */ });
/* unused harmony exports COLOR_GRAY, COLOR_MEDIUM_GRAY, COLOR_SPOTIFY_GREEN, COLOR_DARK_CREAM */
const COLOR_BLACK = "#000";
const COLOR_WHITE = "#fafafa";
const COLOR_GRAY = "#787f85";
const COLOR_DARK_GRAY = "#999";
const COLOR_MEDIUM_GRAY = "#333333";
const COLOR_SPOTIFY_GREEN = "#1DB954";
const COLOR_LIGHT_GRAY = "#dcdcdc";
const COLOR_BLUE = "#3B82F6";
const COLOR_LIGHT_CREAM = "rgba(210, 199, 157, 0.2)";
const COLOR_DARK_CREAM = "rgba(239, 234, 218, 1)";
const COLOR_DARK_PURPLE = "#4b0082";


/***/ }),

/***/ 9893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ devices)
/* harmony export */ });
const breakPoints = {
    mobileL: "576px",
    tabletM: "768px",
    desktopM: "992px",
    tabletL: "1024px",
    desktopL: "1200px"
};
const devices = {
    mobileL: `(max-width: ${breakPoints.mobileL})`,
    tabletM: `(max-width: ${breakPoints.tabletM})`,
    desktopM: `(max-width: ${breakPoints.desktopM})`,
    tabletL: `(max-width: ${breakPoints.tabletL})`,
    desktopL: `(max-width: ${breakPoints.desktopL})`
};


/***/ })

};
;