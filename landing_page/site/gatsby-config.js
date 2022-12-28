module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false
      }
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '2',
        matomoUrl: 'https://matomo.agustibau.com',
        siteUrl: 'briefalert.io'
      }
    }
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'BriefAlert - Summary emails',
    name: 'BriefAlert',
    description: 'Beautiful summary emails at scale'
  }
}
