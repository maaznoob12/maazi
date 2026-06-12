import { useState, useEffect, useRef } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const rafRef = useRef<number>()

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight
        const currentProgress = totalHeight > 0 ? window.scrollY / totalHeight : 0
        setProgress(currentProgress)
        setScrollY(window.scrollY)
        rafRef.current = undefined
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return { progress, scrollY }
}
