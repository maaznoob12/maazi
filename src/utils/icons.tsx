import type { LucideIcon } from 'lucide-react'
import {
  Globe,
  Bot,
  AppWindow,
  Plug,
  Zap,
  Palette,
  Database,
  LayoutDashboard,
  Code,
  Rocket,
  Trophy,
  Sparkles,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Bot,
  AppWindow,
  Plug,
  Zap,
  Palette,
  Database,
  LayoutDashboard,
  Code,
  Rocket,
  Trophy,
  Sparkles,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Code
}
