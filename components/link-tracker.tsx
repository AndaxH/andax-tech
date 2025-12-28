'use client'

import { useEffect } from 'react'
import { track } from '@vercel/analytics'

export function LinkTracker() {
  useEffect(() => {
    // Only track links on resource-library pages
    const isResourceLibraryPage =
      typeof window !== 'undefined' &&
      window.location.pathname.startsWith('/resource-library')

    if (!isResourceLibraryPage) {
      return
    }

    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest('a')

      if (!link) {
        return
      }

      const href = link.getAttribute('href')
      if (!href) {
        return
      }

      // Skip internal links (relative paths)
      if (href.startsWith('/') || href.startsWith('#')) {
        return
      }

      // Get the link text for better analytics
      const linkText = link.textContent?.trim() || 'Unknown'
      const currentPage = window.location.pathname

      // Track the click event
      try {
        track('Resource Library Link Click', {
          url: href.substring(0, 255), // Vercel limit
          linkText: linkText.substring(0, 255), // Vercel limit
          page: currentPage.substring(0, 255) // Vercel limit
        })
      } catch (error) {
        // Silently fail if tracking is not available
        console.debug('Analytics tracking failed:', error)
      }
    }

    // Add event listener to document
    document.addEventListener('click', handleLinkClick, true)

    // Cleanup
    return () => {
      document.removeEventListener('click', handleLinkClick, true)
    }
  }, [])

  return null
}

