import React from 'react'
import { scrollToTop } from '../util/scroll-to-top'

const ScrollToTopButton = () => {
  if (typeof document !== 'undefined') {
    // Find a CSS solution instead
    if (document.querySelector('body').scrollHeight < 1000) {
      return null
    }

    return (
      <button id="scroll-to-top" onClick={scrollToTop}>
        Scroll back to <span>🔝</span>
      </button>
    )
  } else {
    return null
  }
}

export { ScrollToTopButton }
