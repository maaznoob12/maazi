import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'
import { Globe, Bot, Zap, Palette, Sparkles, ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'

function StatCard({ label, end, suffix = '+', delay = 0 }: { label: string; end: number; suffix?: string; delay?: number }) {
  const { ref, inView } = useInView(0.3)
  const { count, setStarted } = useCountUp(end, 2000, true)

  useEffect(() => {
    if (inView) setStarted(true)
  }, [inView, setStarted])

  return (
    <motion.div
      ref={ref}
      className="glass rounded-2xl p-6 md:p-8 text-center group hover:border-neon-cyan/20 transition-all duration-500 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-neon-cyan/5 to-transparent rounded-full blur-2xl" />
      <div className="relative">
        <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 tabular-nums">
          {count}{suffix}
        </div>
        <div className="text-sm text-text-secondary font-medium">{label}</div>
      </div>
    </motion.div>
  )
}

const whatIDo = [
  {
    icon: Globe,
    label: 'Full Stack Development',
    desc: 'Modern web apps with React, Node.js, TypeScript',
    gradient: 'from-neon-cyan to-neon-blue',
    shadow: 'rgba(0,240,255,0.2)',
    color1: '#00f0ff',
    color2: '#0066ff',
  },
  {
    icon: Bot,
    label: 'Discord Bot Development',
    desc: 'Complex bots with economy, moderation, AI',
    gradient: 'from-[#00ff88] to-neon-cyan',
    shadow: 'rgba(0,255,136,0.2)',
    color1: '#00ff88',
    color2: '#00f0ff',
  },
  {
    icon: Zap,
    label: 'Automation Systems',
    desc: 'Custom workflows and process automation',
    gradient: 'from-[#ffaa00] to-[#ff6600]',
    shadow: 'rgba(255,170,0,0.2)',
    color1: '#ffaa00',
    color2: '#ff6600',
  },
  {
    icon: Palette,
    label: 'UI/UX Design',
    desc: 'Premium interfaces with attention to detail',
    gradient: 'from-neon-pink to-neon-purple',
    shadow: 'rgba(255,0,102,0.2)',
    color1: '#ff0066',
    color2: '#7c3aed',
  },
]

export default function About() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-semibold text-white">
              The Story Behind the <span className="text-gradient">Code</span>
            </h3>
            {profile.aboutDetailed.split('\n\n').map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                {paragraph.trim()}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden border border-white/5">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-neon-cyan/5 rounded-full blur-[100px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles size={20} className="text-neon-cyan" />
                  <h4 className="text-lg font-semibold text-white">What I Do</h4>
                </div>
                <div className="grid gap-4">
                  {whatIDo.map((item, i) => (
                    <motion.div
                      key={i}
                      className="group relative overflow-hidden rounded-xl transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      style={{
                        boxShadow: hoveredIdx === i ? `0 0 30px ${item.shadow}` : 'none',
                      }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl"
                        style={{ background: `linear-gradient(135deg, ${item.color1}40, transparent)` }}
                      />
                      <div className="relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:bg-white/[0.04] group-hover:border-white/[0.08] transition-all duration-500">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} p-[1px] shrink-0`}>
                          <div className="w-full h-full rounded-xl bg-dark-black flex items-center justify-center">
                            <item.icon size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h5 className="font-medium text-white group-hover:text-neon-cyan transition-colors duration-300">
                              {item.label}
                            </h5>
                            <ArrowUpRight size={14} className="text-neon-cyan/0 group-hover:text-neon-cyan/60 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" />
                          </div>
                          <p className="text-sm text-text-secondary mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Projects Completed" end={profile.stats.projectsCompleted} delay={0} />
          <StatCard label="Websites Created" end={profile.stats.websitesCreated} delay={0.05} />
          <StatCard label="Discord Bots Built" end={profile.stats.discordBotsBuilt} delay={0.1} />
          <StatCard label="Apps Developed" end={profile.stats.appsDeveloped} delay={0.15} />
        </div>
      </div>
    </section>
  )
}
