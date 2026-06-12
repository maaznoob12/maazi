import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const codeSnippets = [
  'npm install awesomeness',
  'const magic = () => true',
  'deploy --production',
  'git push origin main',
  'build: success ✅',
  'loading components...',
  'compiling experience',
]

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const snippetInterval = setInterval(() => {
      setCurrentSnippet(prev => (prev + 1) % codeSnippets.length)
    }, 400)

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const next = Math.min(prev + Math.random() * 8, 100)
        return next
      })
    }, 100)

    setTimeout(() => {
      clearInterval(progressInterval)
      setProgress(100)
      setTimeout(() => {
        clearInterval(snippetInterval)
        setShow(false)
        setTimeout(onComplete, 800)
      }, 600)
    }, 3000)

    return () => {
      clearInterval(snippetInterval)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-dark-black flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mb-16">
            <motion.h1
              className="text-8xl md:text-9xl font-black tracking-tighter"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-gradient">MAAZ</span>
            </motion.h1>
            <motion.div
              className="absolute -inset-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.1), transparent)',
                filter: 'blur(40px)',
                zIndex: -1,
              }}
            />
          </div>

          <div className="w-64 md:w-80 mb-6">
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-full"
                style={{ width: `${progress}%` }}
                layout
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-text-secondary font-mono">{Math.floor(progress)}%</span>
              <span className="text-xs text-text-secondary font-mono">LOADING</span>
            </div>
          </div>

          <div className="h-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSnippet}
                className="text-sm text-text-secondary font-mono"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-neon-cyan">&gt;</span> {codeSnippets[currentSnippet]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div
              className="flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-neon-cyan/50"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
