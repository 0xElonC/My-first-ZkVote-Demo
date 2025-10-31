'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bars3Icon, 
  XMarkIcon,
  BookOpenIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import { ConnectButton } from '@/components/web3/ConnectButton'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const navigation = [
    { 
      name: t('nav.home'), 
      href: '/',
      icon: BookOpenIcon
    },
    { 
      name: t('nav.blockchainIntro'), 
      href: '/intro',
      icon: AcademicCapIcon,
      description: 'Learn blockchain basics'
    },
    { 
      name: t('nav.zkConcepts'), 
      href: '/zk_intro',
      icon: ShieldCheckIcon,
      description: 'Zero-knowledge fundamentals'
    },
    { 
      name: t('nav.traditionalVote'), 
      href: '/vote_simulate',
      icon: CheckBadgeIcon,
      description: 'Experience on-chain voting'
    },
    { 
      name: t('nav.zkVote'), 
      href: '/zk_vote_proof',
      icon: ShieldCheckIcon,
      description: 'Anonymous ZK voting'
    },
    { 
      name: t('nav.results'), 
      href: '/result',
      icon: ChartBarIcon,
      description: 'View voting analytics'
    },
  ]

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ZK Vote
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            
            <LanguageToggle />
            <ConnectButton />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4 space-y-2"
            >
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                      isActive
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      {item.description && (
                        <div className="text-xs text-gray-500">{item.description}</div>
                      )}
                    </div>
                  </Link>
                )
              })}
              
              <div className="px-2 space-y-2">
                <LanguageToggle />
                <ConnectButton />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}
