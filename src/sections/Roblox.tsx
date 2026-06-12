import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Gamepad2 } from 'lucide-react'
import { profile } from '@/data/profile'

function ProfileCard({ profile: p }: { profile: typeof profile.roblox[0] }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      className="glass rounded-3xl overflow-hidden text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-full aspect-square bg-dark-black flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        {imgError ? (
          <Gamepad2 size={80} className="text-neon-cyan/40" />
        ) : (
          <img
            src={p.avatarUrl}
            alt={p.displayName}
            className="w-full h-full object-contain"
            crossOrigin="anonymous"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </motion.div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">
          {p.displayName}
        </h3>
        <p className="text-neon-cyan font-mono text-xs mb-5">
          @{p.username}
        </p>
        <a
          href={p.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-semibold text-sm rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all duration-300 active:scale-95"
        >
          <ExternalLink size={15} />
          View Profile
        </a>
      </div>
    </motion.div>
  )
}

export default function Roblox() {
  return (
    <section id="roblox" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Roblox <span className="text-gradient">Profiles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {profile.roblox.map(p => (
            <ProfileCard key={p.id} profile={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
