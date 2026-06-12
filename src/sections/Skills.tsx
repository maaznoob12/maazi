import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '@/data/profile'

interface Skill {
  name: string
  category: string
  color: string
}

const categoryColors: Record<string, string> = {
  frontend: '#00f0ff',
  backend: '#0066ff',
  databases: '#7c3aed',
  languages: '#ff0066',
  botDevelopment: '#00ff88',
  deployment: '#ffaa00',
}

const allSkills: Skill[] = Object.entries(profile.skills).flatMap(([category, skills]) =>
  skills.map(skill => ({
    name: skill,
    category,
    color: categoryColors[category] || '#00f0ff',
  }))
)

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const categories = Object.keys(profile.skills)

  const filteredSkills = activeCategory === 'all'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto mb-8" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            A curated selection of technologies I work with daily
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === 'all'
                ? 'bg-neon-cyan/10 border-neon-cyan text-neon-cyan'
                : 'bg-white/5 border-white/10 text-text-secondary hover:border-white/20'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-neon-cyan/10 border-neon-cyan text-neon-cyan'
                  : 'bg-white/5 border-white/10 text-text-secondary hover:border-white/20'
              }`}
            >
              {cat.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={`${skill.name}-${skill.category}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="group"
              >
                <motion.div
                  className="glass rounded-xl p-4 text-center hover:border-neon-cyan/20 transition-all duration-300 cursor-default"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-2 mx-auto"
                    style={{ backgroundColor: skill.color }}
                  />
                  <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {skill.name}
                  </div>
                  <div
                    className="text-[10px] uppercase tracking-wider mt-1 font-medium"
                    style={{ color: `${skill.color}80` }}
                  >
                    {skill.category.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
