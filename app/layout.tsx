import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// 1. Use a standard font to prevent layout shift
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// 2. Separate Viewport (Next.js 14+ requirement)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff', // Matches your "Midnight" theme
};

export const metadata: Metadata = {
  metadataBase: new URL('https://waitbee.vercel.app'), // Replace with your actual domain
  title: {
    default: 'WaitBee | Launch Your Product with a Viral Waitlist',
    template: '%s | WaitBee',
  },
  description: 'The open-source waitlist builder for indie founders. Build hype, collect emails, and launch your product in under 60 seconds.',
  keywords: ['Waitlist Builder', 'SaaS Launch', 'Early Access', 'Lead Generation', 'Open Source'],
  authors: [{ name: 'Chemitha Sathsilu (chemitha)', url: 'https://github.com/chemitha' }],
  creator: 'Chemitha Sathsilu',
  
  // 3. OpenGraph for better Social Media Sharing (Twitter/FB/LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://waitbee.vercel.app',
    title: 'WaitBee - Launch Your Product with a Viral Waitlist',
    description: 'Used by early-stage founders to quickly build hype, collect emails, and launch their products.',
    siteName: 'WaitBee',
    images: [{
        url: '/yt-thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'WaitBee Preview',
      }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WaitBee',
    description: 'Build your viral waitlist in seconds.',
    creator: '@chemitha', // Your twitter handle
    images: ['/yt-thumbnail.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.svg', // Website favicon
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <meta name="google-site-verification" content="NYd954LeebTI_2E3Bl-CoNj4R6fpCsv9ngvcwGSTcyQ" />
      <body 
        className="antialiased min-h-screen bg-white" 
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
