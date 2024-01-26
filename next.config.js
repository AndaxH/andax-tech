const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'
})

const nextraExports = withNextra()
const nextraExportsPlus = {
  ...nextraExports,
  async redirects() {
    return [
      {
        source: '/tea',
        destination: '/tea/index.html',
        permanent: true
      },
      {
        source: '/zoom',
        destination: '/zoom-captions/index.html',
        permanent: true
      },
      {
        source: '/zoom-captions',
        destination: '/zoom-captions/index.html',
        permanent: true
      }
    ]
  }
}

module.exports = nextraExportsPlus
