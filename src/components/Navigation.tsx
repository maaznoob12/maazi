import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollProgress } from '@/hooks/useScrollProgress'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { progress } = useScrollProgress()
  const [activeSection, setActiveSection] = useState('hero')
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          const reversed = ['contact', 'experience', 'projects', 'services', 'skills', 'about', 'hero']
          for (const id of reversed) {
            const el = document.getElementById(id)
            if (el && el.getBoundingClientRect().top <= 200) {
              setActiveSection(id)
              break
            }
          }
          ticking.current = false
        })
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          scrolled ? 'bg-dark-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#hero" onClick={e => { e.preventDefault(); handleClick('#hero') }} className="text-xl font-bold">
              <span className="text-gradient">M</span>
              <span className="text-white/50">aaz</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={e => { e.preventDefault(); handleClick(item.href) }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-neon-cyan bg-neon-cyan/5'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-neon-cyan transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <motion.div
          className="h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"
          style={{ scaleX: progress, transformOrigin: 'left' }}
        />
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[8000] bg-dark-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={e => { e.preventDefault(); handleClick(item.href) }}
                className="text-3xl md:text-4xl font-bold py-4 text-white/50 hover:text-neon-cyan transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
