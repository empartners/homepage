import { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4081ed' },
    { media: '(prefers-color-scheme: dark)', color: '#2d5ce8' },
  ],
} 