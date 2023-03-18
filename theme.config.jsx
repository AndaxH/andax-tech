import { ScrollToTopButton } from './components/scroll-to-top-button'

const YEAR = new Date().getFullYear()

export default {
  postFooter: <ScrollToTopButton />,
  footer: (
    <small style={{ display: 'block', marginTop: '4rem' }}>
      <p>
        <a href="https://www.linkedin.com/in/andrewkhammond/">LinkedIn</a>
      </p>
      <p>
        <a href="https://github.com/AndaxH">GitHub</a>
      </p>
      <p>
        <a href="https://twitter.com/AndaxTech">Twitter</a>
      </p>
      <p>
        <a href="/transparency">Vision</a>
      </p>
      <p>
        <a href="/">About</a>
      </p>
      <time>{YEAR}</time> © Andy Hammond.
      <style jsx>{`
        a {
          float: right;
          margin-left: 1rem;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </small>
  ),
  darkMode: true
}
