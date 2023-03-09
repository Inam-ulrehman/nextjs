module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },

      {
        userAgent: '*',
        disallow: ['/dashboard', '/user'],
      },
    ],
  },
  exclude: ['/dashboard'],
}
