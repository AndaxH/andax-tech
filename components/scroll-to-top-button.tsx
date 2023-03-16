import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { scrollToTop } from '../util/scroll-to-top'

const ScrollToTopButton = () => {
  if (typeof document !== 'undefined') {
    // Find a CSS solution instead
    if (document.querySelector('body').scrollHeight < 1000) {
      return null
    }

    return (
      <button id="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp size="24" /> Scroll back to top
      </button>
    )
  } else {
    return null
  }
}

export { ScrollToTopButton }
