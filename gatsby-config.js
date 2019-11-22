module.exports = {
  siteMetadata: {
    title: 'Leonardo Quevedo',
    author: 'Leonardo Quevedo',
    description: 'Construindo as experiências do amanhã.'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/assets/img/favicon.png' // This path is relative to the root of the site.
      }
    }
  ]
}
