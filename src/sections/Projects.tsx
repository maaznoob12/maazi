import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Globe, Bot, AppWindow } from 'lucide-react'
import { profile } from '@/data/profile'

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'websites', label: 'Websites' },
  { id: 'discord-bots', label: 'Discord Bots' },
  { id: 'applications', label: 'Applications' },
]

const categoryIcons: Record<string, typeof Globe> = {
  'websites': Globe,
  'discord-bots': Bot,
  'applications': AppWindow,
}

const categoryGradients: Record<string, string> = {
  'websites': 'from-neon-cyan/20 via-neon-blue/10 to-neon-purple/20',
  'discord-bots': 'from-[#00ff88]/10 via-[#00f0ff]/10 to-[#0066ff]/10',
  'applications': 'from-neon-purple/10 via-neon-pink/10 to-neon-cyan/10',
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({})

  const filteredProjects = activeCategory === 'all'
    ? profile.projects
    : profile.projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto mb-8" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            A showcase of my best work across different domains
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-neon-cyan/10 border-neon-cyan text-neon-cyan shadow-lg shadow-neon-cyan/10'
                  : 'bg-white/5 border-white/10 text-text-secondary hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const Icon = categoryIcons[project.category] || Globe
              const gradient = categoryGradients[project.category] || 'from-neon-cyan/10 via-neon-blue/5 to-neon-purple/10'
              const hasImgError = imgErrors[project.id]

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group"
                >
                  <motion.div
                    className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:border-neon-cyan/20 transition-all duration-500"
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative h-52 overflow-hidden bg-surface">
                      {!hasImgError && project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                          onError={() => setImgErrors(prev => ({ ...prev, [project.id]: true }))}
                        />
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                          <Icon size={48} className="opacity-20 text-white" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-black/80 via-dark-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-medium border backdrop-blur-sm ${
                          project.category === 'websites'
                            ? 'bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan'
                            : project.category === 'discord-bots'
                            ? 'bg-[#00ff88]/10 border-[#00ff88]/30 text-[#00ff88]'
                            : 'bg-neon-purple/10 border-neon-purple/30 text-neon-purple'
                        }`}>
                          {project.category === 'websites' ? 'Website' : project.category === 'discord-bots' ? 'Discord Bot' : 'Application'}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-text-secondary mb-4 flex-1 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-white/5 text-text-secondary border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-white/5 text-text-secondary">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3 mt-auto pt-4 border-t border-white/[0.04]">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-neon-cyan hover:text-white transition-colors group/btn"
                        >
                          <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
