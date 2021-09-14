module.exports = {
  siteMetadata: {
    title: 'Leonardo Quevedo',
    author: 'Leonardo Quevedo',
    description: 'Leonardo Quevedo. Construindo as experiências do amanhã.',
    siteUrl: 'https://www.leonardoquevedo.com',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
