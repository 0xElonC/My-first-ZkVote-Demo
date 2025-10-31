'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { WalletIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export function ConnectButton() {
  const { address, isConnected } = useAccount()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()
  const [showMenu, setShowMenu] = useState(false)
  const { t } = useLanguage()

  if (isConnected && address) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
        >
          <WalletIcon className="w-4 h-4" />
          <span className="hidden sm:inline">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
            >
              <button
                onClick={() => {
                  disconnect()
                  setShowMenu(false)
                }}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {t('nav.disconnect')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
      >
        <WalletIcon className="w-4 h-4" />
        <span>{t('nav.connect')}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
          >
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => {
                  connect({ connector })
                  setShowMenu(false)
                }}
                className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition-colors flex items-center space-x-3"
              >
                <WalletIcon className="w-5 h-5" />
                <span>{connector.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
