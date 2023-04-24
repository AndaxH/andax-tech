import { ScrollToTopButton } from './components/scroll-to-top-button'

const YEAR = new Date().getFullYear()

export default {
  postFooter: <ScrollToTopButton />,
  footer: (
    <small style={{ display: 'block', marginTop: '4rem' }}>
      <p>
        <a href="/tags/personal%20project">Projects</a>
      </p>
      <p>
        <a href="/transparency">Vision</a>
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
      <time>{YEAR}</time> © Andrew Hammond.
      <a href="/feed.xml">RSS</a>
      <span>
        <p>
          <a href="mailto:hello@andax.tech">📧 Email</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/andrewkhammond/">💼 LinkedIn</a>
        </p>
        <p>
          <a href="https://github.com/AndaxH">🐙 GitHub</a>
        </p>
        <p>
          <a href="https://twitter.com/AndaxTech">🐦 Twitter</a>
        </p>
      </span>
    </small>
  ),
  darkMode: true,
  dateFormatter: (date) => `Last updated on ${date.toDateString()}`
}
