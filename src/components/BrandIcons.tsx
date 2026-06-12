import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

export function InstagramIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTokIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4h5a4 4 0 0 1-4 4" />
      <path d="M14 4h5" />
      <path d="M10 16V8" />
    </svg>
  )
}

export function GitHubIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function DiscordIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M14 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M15.5 17c0 1 1.5 2 2 2 1.5 0 3-1 3.5-2.5.5-1.5.5-4.5.5-4.5s0-3-.5-4.5C20.5 6 19 5 17.5 5c-.5 0-2 0-2 0" />
      <path d="M8.5 17c0 1-1.5 2-2 2-1.5 0-3-1-3.5-2.5C2.5 15 2.5 12 2.5 12s0-3 .5-4.5C3.5 6 5 5 6.5 5c.5 0 2 0 2 0" />
      <path d="M10 5c0-1 .5-2 2-2s2 1 2 2" />
    </svg>
  )
}

export function RobloxIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 8h6l-2 8H7z" />
      <path d="M13 16l2-8" />
    </svg>
  )
}
