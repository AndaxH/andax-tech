import { ScrollToTopButton } from '@/components/scroll-to-top-button'

const YEAR = new Date().getFullYear()

const config = {
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