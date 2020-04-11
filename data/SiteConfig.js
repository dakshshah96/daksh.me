const config = {
  siteTitle: 'Daksh Shah',
  siteTitleShort: 'Daksh Shah',
  siteTitleAlt: 'Daksh Shah',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://daksh.me',
  repo: 'https://github.com/dakshshah96/daksh.me',
  pathPrefix: '',
  siteDescription:
    'Daksh Shah is a full stack software developer and currently heads software at Tilt. He loves writing about JavaScript, Node.js and anything related to the modern web in general.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-47311644-5',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  postsPerPage: 4,
  userName: 'Daksh',
  userEmail: 'dakshshah96@gmail.com',
  userTwitter: 'dakshshah96',
  menuLinks: [
    {
      name: 'About',
      link: '/about/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#c62828',
  backgroundColor: '#e0e0e0',
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`

module.exports = config
