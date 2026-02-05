import { ScrollToTopButton } from '@/components/scroll-to-top-button'

const YEAR = new Date().getFullYear()

const config = {
  head: ({ title, meta }) => {
    const pageTitle = title ? `${title} - Andy Hammond` : 'Andy Hammond'
    const description = meta.description || '👋 Welcome to my little corner of the internet'
    const image = meta.image || 'https://andax.tech/images/og-banner.jpg'

    return (
      <>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </>
    )
  },
  postFooter: <ScrollToTopButton />,
  footer: (
    <small style={{ display: 'block', marginTop: '4rem' }}>
      <p>
        <a href="/tags/personal%20project">Projects</a>
      </p>
      <p>
        <a href="/gratitude">Gratitude</a>
      </p>
      <p>
        <a href="/resource-library">Library</a>
      </p>
      <p>
        <a href="/">About</a>
      </p>
      <time>{YEAR}</time> © Andrew Hammond
      <a href="/feed.xml">RSS</a>
      <span>
        <p>
          <a href="https://www.threads.com/@andaxhambert">🧵 Threads</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/andrewkhammond/">💼 LinkedIn</a>
        </p>
        <p>
          <a href="https://github.com/AndaxH">🐙 GitHub</a>
        </p>
      </span>
    </small>
  ),
  darkMode: true,
  dateFormatter: (date) => `Last updated on ${date.toDateString()}`
}

export default config
