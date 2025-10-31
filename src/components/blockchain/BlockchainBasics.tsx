'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CubeIcon,
  ChainIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const concepts = [
  {
    id: 'distributed',
    title: 'Distributed Network',
    icon: GlobeAltIcon,
    description: 'No single point of failure - transactions are verified by multiple nodes across the world',
    details: [
      'Thousands of nodes worldwide',
      'Redundant verification process',
      'No central authority needed',
      'Censorship resistant'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'immutable',
    title: 'Immutable Records',
    icon: ShieldCheckIcon,
    description: 'Once confirmed, transactions cannot be altered or deleted - providing permanent audit trails',
    details: [
      'Cryptographic hashing',
      'Chain of blocks linked together',
      'Historical data preserved',
      'Tamper-evident design'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'transparent',
    title: 'Public Transparency',
    icon: CubeIcon,
    description: 'All transactions are visible on the public ledger - anyone can verify the state',
    details: [
      'Open transaction history',
      'Publicly verifiable',
      'Real-time monitoring',
      'Audit-friendly design'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'consensus',
    title: 'Consensus Mechanism',
    icon: UsersIcon,
    description: 'Network participants agree on transaction validity through cryptographic proofs',
    details: [
      'Proof of Work (Bitcoin)',
      'Proof of Stake (Ethereum)',
      'Byzantine fault tolerance',
      'Democratic validation'
    ],
    color: 'from-orange-500 to-red-500'
  }
]

export function BlockchainBasics() {
  const [activeTab, setActiveTab] = useState(concepts[0].id)
  
  const activeConcept = concepts.find(c => c.id === activeTab) || concepts[0]

  return (
    <section className="py-16">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-6 text-center">
          Blockchain Fundamentals
        </h2>
        <p className="text-lg text-dark-600 text-center max-w-3xl mx-auto">
          Understanding these core concepts will help you appreciate why zero-knowledge proofs 
          are revolutionary for blockchain privacy and scalability.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Concept Tabs */}
        <div className="lg:col-span-2">
          <div className="space-y-3">
            {concepts.map((concept) => {
              const Icon = concept.icon
              const isActive = activeTab === concept.id
              
              return (
                <motion.button
                  key={concept.id}
                  onClick={() => setActiveTab(concept.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-primary-300 bg-primary-50 shadow-lg'
                      : 'border-dark-200 bg-white hover:border-primary-200 hover:bg-primary-25'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${concept.color} p-2.5 flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold mb-1 ${
                        isActive ? 'text-primary-900' : 'text-dark-900'
                      }`}>
                        {concept.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        isActive ? 'text-primary-700' : 'text-dark-600'
                      }`}>
                        {concept.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Active Concept Details */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="card h-full"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeConcept.color} p-3`}>
                  <activeConcept.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">
                    {activeConcept.title}
                  </h3>
                  <p className="text-dark-600 leading-relaxed">
                    {activeConcept.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-dark-900 mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeConcept.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className="flex items-center space-x-2 p-3 bg-dark-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                      <span className="text-dark-700 text-sm font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Interactive Demo Placeholder */}
              <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border border-primary-200">
                <div className="flex items-center space-x-2 mb-3">
                  <CubeIcon className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold text-primary-900">Interactive Demo</span>
                </div>
                <p className="text-primary-700 text-sm mb-4">
                  Experience how {activeConcept.title.toLowerCase()} works in practice through our interactive visualization.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary btn-sm"
                >
                  Launch Demo
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-12 pt-8 border-t border-dark-200">
        <div className="flex items-center justify-between text-sm text-dark-600">
          <span>Blockchain Fundamentals</span>
          <div className="flex items-center space-x-2">
            <ClockIcon className="w-4 h-4" />
            <span>~15 minutes</span>
          </div>
        </div>
        <div className="mt-3 h-2 bg-dark-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '25%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          />
        </div>
      </div>
    </section>
  )
}