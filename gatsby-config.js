module.exports = {
  siteMetadata: {
    title: 'Bruno Orlandi',
    description: 'Site pessoal de Bruno Orlandi.  Empreendedor e Desenvolvedor Front-end. Compartilhando conhecimento, projetos e ideias sobre tecnologia, empreendedorismo e desenvolvimento pessoal.',
    author: '@brorlandi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bruno Orlandi',
        short_name: 'Bruno Orlandi',
        start_url: '/',
        background_color: '#0057a1',
        theme_color: '#0057a1',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
