import { motion } from 'framer-motion'
import { Code, Globe, Bot, Rocket, Trophy, Sparkles } from 'lucide-react'
import { profile } from '@/data/profile'

const iconMap: Record<string, typeof Code> = {
  Code,
  Globe,
  Bot,
  Rocket,
  Trophy,
  Sparkles,
}

const colorMap: Record<string, string> = {
  Code: '#00f0ff',
  Globe: '#0066ff',
  Bot: '#00ff88',
  Rocket: '#ff6600',
  Trophy: '#ffaa00',
  Sparkles: '#ff0066',
}

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto mb-8" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            The evolution of my development career
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent" />

          {profile.experience.map((exp, i) => {
            const Icon = iconMap[exp.icon] || Code
            const color = colorMap[exp.icon] || '#00f0ff'

            return (
              <motion.div
                key={exp.year}
                className="relative pl-16 sm:pl-20 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute left-6 top-1">
                  <motion.div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: color, backgroundColor: '#0a0a0a' }}
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  </motion.div>
                </div>

                <motion.div
                  className="glass rounded-2xl p-6 hover:border-neon-cyan/20 transition-all duration-500"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <span className="text-sm font-mono" style={{ color }}>{exp.year}</span>
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed ml-[52px]">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
