import { MessageCircle } from 'lucide-react'
import { profile } from '@/data/profile'

export default function FloatingWhatsApp() {
  return (
    <a
      href={profile.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] p-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" stroke="none" />
    </a>
  )
}
