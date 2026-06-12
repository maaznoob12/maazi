import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Send } from 'lucide-react'
import ErrorBoundary from '@/components/ErrorBoundary'
import { profile } from '@/data/profile'

export default function Hero() {
  const [typingText, setTypingText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = profile.typingTexts[textIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setTypingText(currentText.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      }, 50)
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypingText(currentText.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      }, 30)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex(prev => (prev + 1) % profile.typingTexts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-neon-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse-glow" />
              <span className="text-sm text-text-secondary font-mono">Available for projects</span>
            </motion.div>

              <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-text-secondary mb-2 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {profile.titles[0]}
            </motion.div>

            <motion.div
              className="h-10 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-lg text-neon-cyan font-mono">&gt; </span>
              <span className="text-lg text-white/70 font-mono">{typingText}</span>
              <span className="inline-block w-0.5 h-5 bg-neon-cyan ml-0.5 animate-pulse" />
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group relative px-5 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] active:scale-95 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group relative px-5 sm:px-7 py-3 sm:py-3.5 border border-white/15 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:border-neon-cyan/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] active:scale-95 flex items-center gap-2 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Send size={16} />
                  Contact Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              <a
                href={profile.resumeUrl}
                download
                className="group relative px-5 sm:px-7 py-3 sm:py-3.5 border border-white/10 text-text-secondary font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:text-white active:scale-95 flex items-center gap-2 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={16} />
                  Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 rounded-full animate-float blur-3xl" />
              <div className="absolute inset-4 bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple rounded-full animate-spin-slow opacity-20 blur-2xl" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-8 bg-dark-black rounded-full flex items-center justify-center overflow-hidden border border-white/10">
                <img
                  src="https://scontent.cdninstagram.com/v/t51.82787-19/718648896_18031464389818517_8522836963833702771_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy45NTMuQzMifQ%3D%3D&_nc_ohc=Fr6V8fVd04IQ7kNvwEUbyZ8&_nc_oc=Adr_hKDRFsxIceZMsC1XflS4PuQfk52IQ5KUpvP6zh9hFa2WA3EbFeBAaFzBNd9LcE8&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=fC1CAv5VgIYTWlS6pqiYrQ&_nc_ss=7baaf&oh=00_Af-t05LawpP2J_16xxJcoGmw7FuxWRmgPKV7EwdLZDtowg&oe=6A319455"
                  alt="Maaz"
                  className="w-full h-full object-contain p-4"
                  loading="eager"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-neon-cyan" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-neon-cyan" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-neon-cyan rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
