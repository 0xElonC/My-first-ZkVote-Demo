import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My First ZK Vote - Learn Zero-Knowledge Proofs Through Interactive Voting',
  description: 'Educational platform for understanding blockchain transactions and zero-knowledge proofs through hands-on voting demonstrations. Learn from traditional voting to anonymous ZK voting.',
  keywords: [
    'zero-knowledge proofs',
    'blockchain education',
    'zk-SNARKs',
    'voting systems',
    'ethereum',
    'web3',
    'cryptography',
    'privacy'
  ],
  authors: [{ name: 'ZK Education Team' }],
  creator: 'ZK Education Team',
  publisher: 'ZK Education Platform',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://my-first-zk-vote.vercel.app'),
  openGraph: {
    title: 'My First ZK Vote - Interactive ZK Education',
    description: 'Learn zero-knowledge proofs through interactive voting demos. From blockchain basics to anonymous ZK voting.',
    url: 'https://my-first-zk-vote.vercel.app',
    siteName: 'My First ZK Vote',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'My First ZK Vote - Educational Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My First ZK Vote - Learn Zero-Knowledge Proofs',
    description: 'Interactive educational platform for understanding ZK proofs through voting demos.',
    images: ['/og-image.png'],
    creator: '@MyFirstZKVote',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-50 text-dark-900 antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}