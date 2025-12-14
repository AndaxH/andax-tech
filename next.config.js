import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'
})

const nextraExports = withNextra()
const nextraExportsPlus = {
  ...nextraExports,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  },
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

export default nextraExportsPlus
