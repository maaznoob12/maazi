import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#hero" className="text-2xl font-bold">
              <span className="text-gradient">M</span>
              <span className="text-white/50">aaz</span>
            </a>
            <p className="text-sm text-text-secondary mt-2">
              MAAZ DEVELOPER
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {footerLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-sm text-text-secondary hover:text-neon-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs text-text-secondary">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
