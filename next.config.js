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
        source: '/checklist',
        destination: '/checklist/index.html',
        permanent: true
      },
      {
        source: '/verses',
        destination: '/verses/index.html',
        permanent: true
      },
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
      },
      {
        source: '/make-a-game',
        destination: '/make-a-game/index.html',
        permanent: true
      }
    ]
  }
}

module.exports = nextraExportsPlus
