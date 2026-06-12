import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react'
import { InstagramIcon, TikTokIcon } from '@/components/BrandIcons'
import { profile } from '@/data/profile'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const contactLinks = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: MessageCircle, label: 'WhatsApp', value: '+92 349 7409464', href: profile.whatsappUrl },
    { icon: InstagramIcon, label: 'Instagram', value: profile.social.instagram, href: profile.social.instagram },
    { icon: TikTokIcon, label: 'TikTok', value: profile.social.tiktok, href: profile.social.tiktok },
    { icon: MapPin, label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="relative section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto mb-8" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-3xl transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(37,211,102,0.08), rgba(18,140,126,0.04))',
              border: '1px solid rgba(37,211,102,0.12)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#25D366]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-neon-cyan/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-5 md:gap-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-[2px] shrink-0">
                <div className="w-full h-full rounded-2xl bg-dark-black flex items-center justify-center">
                  <MessageCircle size={32} className="text-[#25D366]" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Let&apos;s Build Your Next Project
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-lg">
                  Custom websites, web apps, and Discord bots tailored to your needs. 
                  Fully customizable — every detail crafted to match your vision.
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-xl text-sm transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(37,211,102,0.25)] group-hover:scale-105 active:scale-95">
                  <MessageCircle size={18} />
                  Start a Conversation
                </span>
              </div>
            </div>

            <div className="relative z-10 px-6 sm:px-8 md:px-12 pb-5 sm:pb-6 md:pb-8 flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-2 text-xs text-text-secondary/60 border-t border-white/[0.04] pt-4 sm:pt-5">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#25D366]" />
                Response in &lt; 5 min
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-neon-cyan" />
                Free consultation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-neon-purple" />
                100% customizable
              </span>
            </div>
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Message</label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="group relative w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] active:scale-[0.98]"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? (
                    <motion.span
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <CheckCircle size={18} />
                      Message Sent!
                    </motion.span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Send Message
                    </span>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {contactLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-neon-cyan/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-neon-cyan/10 transition-colors">
                      <link.icon size={20} className="text-neon-cyan" />
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">{link.label}</div>
                      <div className="font-medium text-white group-hover:text-neon-cyan transition-colors">{link.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="glass rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <link.icon size={20} className="text-neon-cyan" />
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">{link.label}</div>
                      <div className="font-medium text-white">{link.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
