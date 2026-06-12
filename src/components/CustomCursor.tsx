import { useEffect, useRef, useState } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

export default function CustomCursor() {
  const { position } = useMousePosition()
  const [isTouch] = useState(() => 'ontouchstart' in window || navigator.maxTouchPoints > 0)
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const trailPosRef = useRef({ x: 0, y: 0 })
  const [visible, setVisible] = useState(true)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (isTouch) {
      document.body.classList.add('touch-device')
    }
  }, [isTouch])

  useEffect(() => {
    if (isTouch) return
    posRef.current = { x: position.x, y: position.y }
  }, [isTouch, position])

  useEffect(() => {
    if (isTouch || !cursorRef.current) return

    const el = cursorRef.current
    const trail = trailRef.current
    const glow = glowRef.current
    const lerp = 0.15

    const animate = () => {
      el.style.transform = `translate(${posRef.current.x - 10}px, ${posRef.current.y - 10}px)`
      if (trail) {
        trailPosRef.current.x += (posRef.current.x - trailPosRef.current.x) * lerp
        trailPosRef.current.y += (posRef.current.y - trailPosRef.current.y) * lerp
        trail.style.transform = `translate(${trailPosRef.current.x - 20}px, ${trailPosRef.current.y - 20}px)`
      }
      if (glow) {
        glow.style.background = `radial-gradient(600px at ${posRef.current.x}px ${posRef.current.y}px, rgba(0, 240, 255, 0.03), transparent)`
      }
      requestAnimationFrame(animate)
    }

    const raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [isTouch])

  useEffect(() => {
    if (isTouch) return

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)

    const interactive = document.querySelectorAll('a, button, input, textarea, [data-cursor-hover]')
    interactive.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    const handleSelection = () => {
      const sel = window.getSelection()
      setVisible(!sel || sel.isCollapsed)
    }

    document.addEventListener('selectionchange', handleSelection)

    return () => {
      interactive.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      document.removeEventListener('selectionchange', handleSelection)
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          width: hovered ? '32px' : '20px',
          height: hovered ? '32px' : '20px',
          backgroundColor: hovered ? 'transparent' : '#00f0ff',
          border: hovered ? '2px solid #00f0ff' : 'none',
          boxShadow: hovered
            ? '0 0 40px rgba(0, 240, 255, 0.3)'
            : '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.2)',
          opacity: visible ? 0.9 : 0,
          transition: 'width 0.15s, height 0.15s, background-color 0.15s, border 0.15s, box-shadow 0.15s, opacity 0.2s',
        }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          width: hovered ? '40px' : '36px',
          height: hovered ? '40px' : '36px',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          opacity: visible ? 0.5 : 0,
          transition: 'width 0.3s, height 0.3s, opacity 0.2s',
        }}
      />
      <div
        ref={glowRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
      />
    </>
  )
}
