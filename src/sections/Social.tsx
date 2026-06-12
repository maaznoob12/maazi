import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { InstagramIcon, TikTokIcon, RobloxIcon } from '@/components/BrandIcons'
import { profile } from '@/data/profile'

const socials = [
  {
    name: 'Instagram',
    icon: InstagramIcon,
    url: profile.social.instagram,
    color: '#E4405F',
    label: 'not_.maaz',
  },
  {
    name: 'TikTok',
    icon: TikTokIcon,
    url: profile.social.tiktok,
    color: '#ffffff',
    label: '@maazlodhi23',
  },
  {
    name: 'Roblox',
    icon: RobloxIcon,
    url: profile.social.roblox,
    color: '#00A2FF',
    label: '7900426828',
  },
]

export default function Social() {
  return (
    <section id="social" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Connect <span className="text-gradient">With Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto mb-8" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Let&apos;s connect across the digital universe
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <motion.div
                className="glass rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden hover:border-neon-cyan/20 transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${social.color}20, transparent)`,
                  }}
                />
                <social.icon
                  size={32}
                  className="group-hover:scale-110 transition-transform duration-300"
                  style={{ color: social.color }}
                />
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-neon-cyan transition-colors">
                    {social.name}
                  </div>
                  <div className="text-[10px] text-text-secondary mt-0.5 font-mono">{social.label}</div>
                </div>
                <ExternalLink size={12} className="text-text-secondary group-hover:text-neon-cyan transition-colors" />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
