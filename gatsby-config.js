module.exports = {
  siteMetadata: {
    title: "Caitlin Hulsey",
    description: "Caitlin Hulsey",
    author: "@caithuls"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Caitlin Hulsey",
        short_name: "caithuls",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#4dc0b5",
        display: "minimal-ui",
        icon: "src/images/folds.png"
      }
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data/",
        name: "data"
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/images/",
        name: "images"
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline"
  ]
};
