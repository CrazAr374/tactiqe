"use client"

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
        }
      })
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch (e) {
        // Fallback for browsers that don't support this
      }

      // First Input Delay (FID) and Cumulative Layout Shift (CLS)
      const webVitalsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case 'first-input':
              // processingStart exists on PerformanceEventTiming in supported browsers; guard to satisfy TypeScript
              if ('processingStart' in entry && typeof (entry as any).processingStart === 'number') {
                console.log('FID:', (entry as any).processingStart - entry.startTime)
              }
              break
            case 'layout-shift':
              if (!(entry as any).hadRecentInput) {
                console.log('CLS:', (entry as any).value)
              }
              break
          }
        }
      })

      try {
        webVitalsObserver.observe({ entryTypes: ['first-input', 'layout-shift'] })
      } catch (e) {
        // Fallback for browsers that don't support this
      }

      // Resource loading performance
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 1000) { // Log slow resources (>1s)
            console.warn('Slow resource:', entry.name, entry.duration + 'ms')
          }
        }
      })

      try {
        resourceObserver.observe({ entryTypes: ['resource'] })
      } catch (e) {
        // Fallback
      }

      // Cleanup
      return () => {
        observer.disconnect()
        webVitalsObserver.disconnect()
        resourceObserver.disconnect()
      }
    }
  }, [])

  return null // This component doesn't render anything
}