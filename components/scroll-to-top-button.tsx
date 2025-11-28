import React, { useEffect, useState } from 'react'
import { scrollToTop } from '@/util/scroll-to-top'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (document.body.scrollHeight > 1000) {
      setShowButton(true)
    }
  }, [])

  if (!showButton) {
    return null
  }

  return (
    <button id="scroll-to-top" onClick={scrollToTop}>
      Scroll back to <span>🔝</span>
    </button>
  )
}

export { ScrollToTopButton }
