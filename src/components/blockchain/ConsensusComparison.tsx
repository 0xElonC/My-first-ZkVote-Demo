'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BoltIcon, ShieldCheckIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const consensusMechanisms = [
  {
    id: 'pow',
    name: 'Proof of Work (PoW)',
    icon: BoltIcon,
    color: 'from-yellow-500 to-orange-500',
    description: 'Miners compete to solve cryptographic puzzles',
    pros: ['Battle-tested security', 'True decentralization', 'Simple to understand'],
    cons: ['High energy consumption', 'Slower transaction times', 'Hardware intensive'],
    examples: ['Bitcoin', 'Ethereum (pre-merge)', 'Litecoin'],
    metrics: {
      energy: 20,
      speed: 40,
      decentralization: 90,
      security: 95
    }
  },
  {
    id: 'pos',
    name: 'Proof of Stake (PoS)',
    icon: ShieldCheckIcon,
    color: 'from-green-500 to-emerald-500',
    description: 'Validators stake tokens to propose and validate blocks',
    pros: ['Energy efficient', 'Faster finality', 'Lower barriers to entry'],
    cons: ['Nothing-at-stake problem', 'Wealth concentration risk', 'Less battle-tested'],
    examples: ['Ethereum 2.0', 'Cardano', 'Polkadot'],
    metrics: {
      energy: 95,
      speed: 75,
      decentralization: 70,
      security: 85
    }
  },
  {
    id: 'rollup',
    name: 'ZK Rollups',
    icon: RocketLaunchIcon,
    color: 'from-purple-500 to-pink-500',
    description: 'Layer 2 scaling using zero-knowledge proofs',
    pros: ['High throughput', 'Low fees', 'Ethereum security'],
    cons: ['Complex implementation', 'Centralized sequencers', 'Emerging technology'],
    examples: ['zkSync', 'Starknet', 'Polygon zkEVM'],
    metrics: {
      energy: 98,
      speed: 95,
      decentralization: 60,
      security: 90
    }
  }
]

export function ConsensusComparison() {
  const [activeTab, setActiveTab] = useState('pow')
  const activeMechanism = consensusMechanisms.find(m => m.id === activeTab) || consensusMechanisms[0]
  const Icon = activeMechanism.icon

  return (
    <section className="py-16">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-6 text-center">
          Consensus Mechanisms
        </h2>
        <p className="text-lg text-dark-600 text-center max-w-3xl mx-auto">
          Different approaches to achieving agreement in distributed networks
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {consensusMechanisms.map((mechanism) => {
          const TabIcon = mechanism.icon
          return (
            <button
              key={mechanism.id}
              onClick={() => setActiveTab(mechanism.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === mechanism.id
                  ? 'bg-gradient-to-r ' + mechanism.color + ' text-white shadow-lg scale-105'
                  : 'bg-white border-2 border-dark-200 text-dark-700 hover:border-primary-300'
              }`}
            >
              <TabIcon className="w-5 h-5" />
              <span>{mechanism.name}</span>
            </button>
          )
        })}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Details */}
        <div className="card">
          <div className="flex items-start space-x-4 mb-6">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeMechanism.color} p-3`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-2">
                {activeMechanism.name}
              </h3>
              <p className="text-dark-600">
                {activeMechanism.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Advantages
              </h4>
              <ul className="space-y-2">
                {activeMechanism.pros.map((pro, i) => (
                  <li key={i} className="text-sm text-dark-600 flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Disadvantages
              </h4>
              <ul className="space-y-2">
                {activeMechanism.cons.map((con, i) => (
                  <li key={i} className="text-sm text-dark-600 flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-dark-900 mb-3">Examples</h4>
            <div className="flex flex-wrap gap-2">
              {activeMechanism.examples.map((example) => (
                <span
                  key={example}
                  className="px-3 py-1 bg-dark-100 text-dark-700 rounded-lg text-sm font-medium"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="card">
          <h4 className="font-semibold text-dark-900 mb-6">Performance Metrics</h4>
          
          <div className="space-y-6">
            {[
              { label: 'Energy Efficiency', value: activeMechanism.metrics.energy, color: 'green' },
              { label: 'Transaction Speed', value: activeMechanism.metrics.speed, color: 'blue' },
              { label: 'Decentralization', value: activeMechanism.metrics.decentralization, color: 'purple' },
              { label: 'Security', value: activeMechanism.metrics.security, color: 'red' }
            ].map((metric) => (
              <div key={metric.label}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-dark-700">{metric.label}</span>
                  <span className="text-sm font-bold text-dark-900">{metric.value}%</span>
                </div>
                <div className="h-3 bg-dark-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.value}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full bg-${metric.color}-500 rounded-full`}
                    style={{
                      background: metric.color === 'green' ? '#10b981' :
                                 metric.color === 'blue' ? '#3b82f6' :
                                 metric.color === 'purple' ? '#a855f7' : '#ef4444'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
            <p className="text-sm text-primary-800">
              <strong>Note:</strong> These metrics are comparative and represent general characteristics. 
              Actual performance varies based on implementation and network conditions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}