import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent(prev => (prev + 1) % profile.testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const goNext = () => {
    setDirection(1)
    setCurrent(prev => (prev + 1) % profile.testimonials.length)
  }

  const goPrev = () => {
    setDirection(-1)
    setCurrent(prev => (prev - 1 + profile.testimonials.length) % profile.testimonials.length)
  }

  const t = profile.testimonials[current]

  return (
    <section id="testimonials" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Client <span className="text-gradient">Feedback</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto mb-8" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -100 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="glass rounded-3xl p-8 md:p-12 text-center relative">
                    <div className="absolute top-6 left-6 opacity-10">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neon-cyan">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>

                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {t.name.charAt(0)}
                      </span>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-6 italic">
                      &ldquo;{t.content}&rdquo;
                    </p>

                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">{t.name}</h4>
                      <p className="text-sm text-text-secondary">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {profile.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-neon-cyan w-6' : 'bg-white/20 hover:bg-white/40 w-2'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
