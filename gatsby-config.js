require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: process.env.TITLE,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
