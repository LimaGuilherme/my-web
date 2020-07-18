module.exports = {
  siteMetadata: {
    title: 'Guilherme de Lima Barros - Software Engineer',
    author: 'None',
    siteUrl: 'https://limaguilherme.github.io'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png'
      }
    }
  ],
};
