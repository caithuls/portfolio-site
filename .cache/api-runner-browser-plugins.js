module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Caitlin Hulsey","short_name":"caithuls","start_url":"/","background_color":"#ffffff","theme_color":"#4dc0b5","display":"minimal-ui","icon":"src/images/folds.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
