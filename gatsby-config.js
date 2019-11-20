module.exports = {
  assetPrefix: 'public',
  siteMetadata: {
    title: 'Leonardo Quevedo',
    author: 'Leonardo Quevedo',
    description: 'Construindo as experiências do amanhã.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Leonardo Quevedo',
        short_name: 'Leonardo Quevedo',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#222222',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ]
}
