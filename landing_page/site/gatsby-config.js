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
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.briefalert.io',
        sitemap: 'https://www.briefalert.io/sitemap.xml',
        policy: [
          { userAgent: '*', allow: '/' },
          {
            userAgent: '*',
            disallow: [
              '/cookie_policy.html',
              '/privacy_policy.html',
              '/terms_of_use.html'
            ]
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: new Date()
          }
        }
      }
    }
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'BriefAlert - Summary emails',
    name: 'BriefAlert',
    description:
      'Reduce spam induced churn, by sending personalized newsletter emails. With BriefAlert, sending and designing newsletter emails takes less than a sprint!',
    siteUrl: 'https://www.briefalert.io'
  }
}
