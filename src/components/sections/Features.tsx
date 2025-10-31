'use client'

import { motion } from 'framer-motion'
import { 
  BookOpenIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  ChartBarIcon,
  SparklesIcon,
  GlobeAltIcon,
  CpuChipIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: BookOpenIcon,
    title: 'Interactive Learning',
    description: 'Step-by-step guided experience from blockchain basics to advanced ZK concepts',
    color: 'from-blue-500 to-indigo-600',
    highlights: ['Animated tutorials', 'Visual explanations', 'Hands-on demos']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Zero-Knowledge Proofs',
    description: 'Experience the power of proving knowledge without revealing secrets',
    color: 'from-purple-500 to-pink-600',
    highlights: ['Groth16 protocol', 'snarkjs integration', 'Client-side proving']
  },
  {
    icon: CheckBadgeIcon,
    title: 'Real Blockchain Voting',
    description: 'Vote on Sepolia testnet with actual Ethereum transactions',
    color: 'from-emerald-500 to-teal-600',
    highlights: ['MetaMask integration', 'Live transactions', 'Etherscan tracking']
  },
  {
    icon: EyeSlashIcon,
    title: 'Anonymous Participation',
    description: 'Vote privately using zero-knowledge group membership proofs',
    color: 'from-indigo-500 to-purple-600',
    highlights: ['Semaphore protocol', 'Privacy preserving', 'Anonymous signals']
  },
  {
    icon: ChartBarIcon,
    title: 'Data Visualization',
    description: 'Beautiful charts comparing traditional vs ZK voting systems',
    color: 'from-orange-500 to-red-600',
    highlights: ['Live statistics', 'Comparison analytics', 'Interactive charts']
  },
  {
    icon: CpuChipIcon,
    title: 'Advanced Cryptography',
    description: 'Learn cutting-edge cryptographic primitives through practical use',
    color: 'from-cyan-500 to-blue-600',
    highlights: ['Circuit programming', 'Merkle trees', 'Hash functions']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container-wide section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
            <SparklesIcon className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">
              Comprehensive Learning Experience
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Master ZK</span>
          </h2>
          
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            From understanding blockchain fundamentals to implementing zero-knowledge proofs, 
            our platform provides a complete educational journey with real-world applications.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="card h-full border border-dark-200 group-hover:border-primary-300 group-hover:shadow-glow">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-dark-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span className="text-dark-600">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-transparent to-secondary-50/0 group-hover:from-primary-50/30 group-hover:to-secondary-50/20 rounded-xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 pt-12 border-t border-dark-200"
        >
          <div className="bg-gradient-to-br from-primary-50 via-secondary-50/50 to-accent-50 rounded-2xl p-8 lg:p-12 border border-primary-200">
            <GlobeAltIcon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 mb-4">
              Ready to Start Your ZK Journey?
            </h3>
            <p className="text-dark-600 mb-6 max-w-2xl mx-auto">
              Join thousands of developers learning zero-knowledge proofs through our 
              interactive platform. Start with blockchain basics or jump directly to ZK concepts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/intro"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Begin Learning Path
              </motion.a>
              <motion.a
                href="/zk_vote_proof"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-purple"
              >
                Try ZK Voting Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}