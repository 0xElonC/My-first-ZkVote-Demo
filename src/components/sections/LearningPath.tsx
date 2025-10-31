'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  BookOpenIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  ChartBarIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const learningSteps = [
  {
    id: 1,
    title: 'Blockchain Fundamentals',
    description: 'Understand how blockchain transactions work, from creation to confirmation',
    href: '/intro',
    icon: BookOpenIcon,
    duration: '15 min',
    difficulty: 'Beginner',
    color: 'from-blue-500 to-cyan-500',
    topics: ['Transaction lifecycle', 'Gas & fees', 'Consensus mechanisms', 'Block structure']
  },
  {
    id: 2,
    title: 'Zero-Knowledge Concepts',
    description: 'Learn the fundamentals of zero-knowledge proofs and cryptographic primitives',
    href: '/zk_intro',
    icon: ShieldCheckIcon,
    duration: '20 min',
    difficulty: 'Intermediate',
    color: 'from-purple-500 to-pink-500',
    topics: ['ZK properties', 'Groth16 protocol', 'Circuit design', 'Proof systems']
  },
  {
    id: 3,
    title: 'Traditional Voting',
    description: 'Experience on-chain voting with MetaMask and see transaction transparency',
    href: '/vote_simulate',
    icon: CheckBadgeIcon,
    duration: '10 min',
    difficulty: 'Beginner',
    color: 'from-green-500 to-emerald-500',
    topics: ['Wallet connection', 'Smart contracts', 'Transaction signing', 'Gas estimation']
  },
  {
    id: 4,
    title: 'ZK Anonymous Voting',
    description: 'Vote anonymously using zero-knowledge proofs and group membership',
    href: '/zk_vote_proof',
    icon: ShieldCheckIcon,
    duration: '25 min',
    difficulty: 'Advanced',
    color: 'from-indigo-500 to-purple-500',
    topics: ['Semaphore protocol', 'Merkle trees', 'Nullifier hashes', 'Circuit proving']
  },
  {
    id: 5,
    title: 'Results & Analysis',
    description: 'Compare voting methods and understand the trade-offs between systems',
    href: '/result',
    icon: ChartBarIcon,
    duration: '10 min',
    difficulty: 'Beginner',
    color: 'from-orange-500 to-red-500',
    topics: ['Data visualization', 'Privacy comparison', 'Performance metrics', 'Use cases']
  }
]

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
}

export function LearningPath() {
  return (
    <section className="py-24 bg-gradient-to-br from-dark-50 via-primary-50/10 to-secondary-50/10">
      <div className="container-wide section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white border border-primary-200 rounded-full px-4 py-2 mb-6">
            <BookOpenIcon className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">
              Structured Learning Journey
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Your Path to{' '}
            <span className="gradient-text">ZK Mastery</span>
          </h2>
          
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            Follow our carefully designed curriculum that takes you from blockchain basics 
            to advanced zero-knowledge concepts through hands-on experiences.
          </p>
        </motion.div>

        {/* Learning Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-secondary-300 to-accent-300 transform -translate-x-1/2"></div>

          {learningSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 lg:mb-16 ${
                index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-auto'
              }`}
            >
              {/* Step Number Circle */}
              <div className="hidden lg:block absolute top-8 left-1/2 w-12 h-12 bg-white border-4 border-primary-300 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10">
                <span className="text-primary-600 font-bold text-lg">{step.id}</span>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <Link href={step.href}>
                  <div className="card group-hover:shadow-card-hover group-hover:border-primary-300 transition-all duration-300 max-w-lg lg:max-w-md">
                    {/* Mobile Step Number */}
                    <div className="lg:hidden flex items-center justify-between mb-4">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                        {step.id}
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-dark-500">
                        <div className="flex items-center space-x-1">
                          <ClockIcon className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[step.difficulty]}`}>
                          {step.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title & Meta Info */}
                    <div className="hidden lg:flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-dark-900 group-hover:text-primary-700 transition-colors">
                        {step.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-sm text-dark-500">
                        <div className="flex items-center space-x-1">
                          <ClockIcon className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[step.difficulty]}`}>
                          {step.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Mobile Title */}
                    <h3 className="lg:hidden text-xl font-bold text-dark-900 group-hover:text-primary-700 transition-colors mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-dark-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Topics */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {step.topics.map((topic, i) => (
                          <span
                            key={i}
                            className="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded-md"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                        Start Learning
                      </span>
                      <ArrowRightIcon className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-12 border-t border-dark-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-dark-900 mb-2">~80 minutes</h4>
              <p className="text-dark-600">Total learning time</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-4">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-dark-900 mb-2">All Levels</h4>
              <p className="text-dark-600">Beginner to advanced</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-dark-900 mb-2">100% Free</h4>
              <p className="text-dark-600">Open source education</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}