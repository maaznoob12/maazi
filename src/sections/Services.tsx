import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, Bot, AppWindow, Plug, Zap, Palette, Database, LayoutDashboard } from 'lucide-react'
import { profile } from '@/data/profile'

const serviceIcons: Record<string, typeof Globe> = {
  'Website Development': Globe,
  'Discord Bot Development': Bot,
  'Web Applications': AppWindow,
  'API Development': Plug,
  'Automation Systems': Zap,
  'UI/UX Design': Palette,
  'Database Systems': Database,
  'Admin Dashboards': LayoutDashboard,
}

const serviceColors: Record<string, string> = {
  'Website Development': '#00f0ff',
  'Discord Bot Development': '#00ff88',
  'Web Applications': '#0066ff',
  'API Development': '#7c3aed',
  'Automation Systems': '#ffaa00',
  'UI/UX Design': '#ff0066',
  'Database Systems': '#ff6600',
  'Admin Dashboards': '#00ccff',
}

const serviceGradients: Record<string, string> = {
  'Website Development': 'from-[#00f0ff] to-[#0066ff]',
  'Discord Bot Development': 'from-[#00ff88] to-[#00f0ff]',
  'Web Applications': 'from-[#0066ff] to-[#7c3aed]',
  'API Development': 'from-[#7c3aed] to-[#ff0066]',
  'Automation Systems': 'from-[#ffaa00] to-[#ff6600]',
  'UI/UX Design': 'from-[#ff0066] to-[#7c3aed]',
  'Database Systems': 'from-[#ff6600] to-[#ff0066]',
  'Admin Dashboards': 'from-[#00ccff] to-[#00f0ff]',
}

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section id="services" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Services I <span className="text-gradient">Provide</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto mb-8" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Premium digital solutions crafted with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {profile.services.map((service, i) => {
            const Icon = serviceIcons[service.title] || Globe
            const color = serviceColors[service.title] || '#00f0ff'

            return (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <motion.div
                  className="relative h-full rounded-2xl overflow-hidden transition-all duration-500"
                  whileHover={{ y: -6, scale: 1.01 }}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: hoveredIdx === i ? `0 0 40px ${color}15, inset 0 0 60px ${color}08` : 'none',
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(600px at 50% 0%, ${color}15, transparent)`,
                    }}
                  />

                  <div className="relative z-10 p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${serviceGradients[service.title] || 'from-neon-cyan to-neon-blue'} p-[1.5px]`}>
                        <div className="w-full h-full rounded-xl bg-dark-black flex items-center justify-center">
                          <Icon size={22} className="text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      <span
                        className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border"
                        style={{
                          color,
                          borderColor: `${color}40`,
                          backgroundColor: `${color}10`,
                        }}
                      >
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-white mb-2.5 group-hover:text-neon-cyan transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed flex-1">
                      {service.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[11px] text-text-secondary font-mono">Learn More</span>
                    </div>
                  </div>

                  <div
                    className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-700"
                    style={{ backgroundColor: color }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
