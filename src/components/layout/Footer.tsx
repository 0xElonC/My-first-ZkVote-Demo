'use client'

import Link from 'next/link'
import { 
  ShieldCheckIcon,
  BookOpenIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const footerLinks = {
  learn: [
    { name: 'Blockchain Basics', href: '/intro' },
    { name: 'ZK Concepts', href: '/zk_intro' },
    { name: 'Traditional Voting', href: '/vote_simulate' },
    { name: 'ZK Voting', href: '/zk_vote_proof' },
  ],
  resources: [
    { name: 'Semaphore Protocol', href: 'https://semaphore.pse.dev/' },
    { name: 'snarkjs Documentation', href: 'https://github.com/iden3/snarkjs' },
    { name: 'Zero-Knowledge Proofs', href: 'https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/' },
    { name: 'Groth16 Paper', href: 'https://eprint.iacr.org/2016/260.pdf' },
  ],
  community: [
    { name: 'GitHub Repository', href: 'https://github.com/your-username/my-first-zk-vote' },
    { name: 'Discord Community', href: 'https://discord.gg/zkteaching' },
    { name: 'Twitter', href: 'https://twitter.com/MyFirstZKVote' },
    { name: 'Telegram Group', href: 'https://t.me/zkteaching' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'MIT License', href: 'https://opensource.org/licenses/MIT' },
  ],
}

const inspirations = [
  { 
    name: 'MyFirstNFT', 
    href: 'https://myfirstnft.info/',
    description: 'Educational NFT platform by LXDAO'
  },
  { 
    name: 'LXDAO', 
    href: 'https://lxdao.io/',
    description: 'R&D-focused DAO in Web3'
  },
  { 
    name: 'PSE', 
    href: 'https://pse.dev/',
    description: 'Privacy & Scaling Explorations'
  },
]

export function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-300 border-t border-dark-800">
      <div className="container-wide section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  My First <span className="gradient-text">ZK Vote</span>
                </h3>
              </div>
            </div>
            <p className="text-sm text-dark-400 mb-6 leading-relaxed">
              Learn zero-knowledge proofs through interactive voting experiences. 
              From blockchain basics to anonymous ZK voting.
            </p>
            <div className="flex items-center text-sm text-dark-400">
              <BookOpenIcon className="w-4 h-4 mr-2" />
              Educational • Open Source • Privacy-Focused
            </div>
          </div>

          {/* Learning Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <BookOpenIcon className="w-4 h-4 mr-2" />
              Learning Path
            </h4>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <GlobeAltIcon className="w-4 h-4 mr-2" />
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200 flex items-center"
                  >
                    {link.name}
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200 flex items-center"
                  >
                    {link.name}
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Inspirations Section */}
        <div className="py-6 border-t border-dark-800">
          <h4 className="text-white font-semibold mb-4 flex items-center">
            <HeartIcon className="w-4 h-4 mr-2 text-red-400" />
            Inspired By
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {inspirations.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-600 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-white font-medium group-hover:text-primary-400 transition-colors">
                      {project.name}
                    </h5>
                    <p className="text-xs text-dark-400 mt-1">
                      {project.description}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-dark-500 group-hover:text-primary-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 text-sm text-dark-400">
            {footerLinks.legal.map((link, index) => (
              <span key={link.name} className="flex items-center">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
                {index < footerLinks.legal.length - 1 && (
                  <span className="mx-2 text-dark-600">•</span>
                )}
              </span>
            ))}
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-dark-400 flex items-center">
            <HeartIcon className="w-4 h-4 mr-1 text-red-400" />
            Made with love for the ZK community
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 border-t border-dark-800 text-center">
          <p className="text-sm text-dark-500">
            © {new Date().getFullYear()} My First ZK Vote. All rights reserved. 
            <span className="mx-2">•</span>
            Built for education and open-source learning.
          </p>
        </div>
      </div>
    </footer>
  )
}