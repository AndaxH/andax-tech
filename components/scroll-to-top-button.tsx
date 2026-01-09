'use client'

import { useEffect, useState } from 'react'

const SCROLL_THRESHOLD = 300

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > SCROLL_THRESHOLD)
    }

    // Check initial position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showButton) {
    return null
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button id="scroll-to-top" onClick={scrollToTop}>
      Scroll back to <span>🔝</span>
    </button>
  )
}

export { ScrollToTopButton }
