module.exports = {
    siteMetadata: {
      title: "Leonardo Quevedo",
      author: "Leonardo Quevedo",
      description: "Construindo as experiências do amanhã."
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'gatsby-starter-default',
          short_name: 'starter',
          start_url: '/',
          background_color: '#222222',
          theme_color: '#222222',
          display: 'minimal-ui',
          icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        },
      },
      'gatsby-plugin-sass',
      'gatsby-plugin-offline'
    ],
  }