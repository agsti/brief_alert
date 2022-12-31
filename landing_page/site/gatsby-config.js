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
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BriefAlert.io',
        short_name: 'BriefAlert.io',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#448bdb',
        display: 'minimal-ui',
        icon: 'content/assets/brief_alert/favicon.png'
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
