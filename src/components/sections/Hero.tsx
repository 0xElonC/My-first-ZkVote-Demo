'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRightIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  SparklesIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-50 via-primary-50/20 to-secondary-50/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -25, 0],
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-15 blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full opacity-25 blur-2xl"
        />
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 mb-8"
          >
            <SparklesIcon className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">
              Interactive Zero-Knowledge Education
            </span>
            <ShieldCheckIcon className="w-4 h-4 text-secondary-600" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold text-dark-900 mb-6 leading-tight"
          >
            My First{' '}
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
              ZK Vote
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl text-dark-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Learn zero-knowledge proofs through interactive experiences. 
            From understanding blockchain transactions to experiencing 
            anonymous ZK voting.
          </motion.p>

          {/* Feature Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12 text-dark-600"
          >
            <div className="flex items-center space-x-2">
              <BookOpenIcon className="w-5 h-5 text-primary-600" />
              <span className="font-medium">Learn by Doing</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheckIcon className="w-5 h-5 text-secondary-600" />
              <span className="font-medium">Privacy-First</span>
            </div>
            <div className="flex items-center space-x-2">
              <AcademicCapIcon className="w-5 h-5 text-accent-600" />
              <span className="font-medium">Beginner Friendly</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/intro"
              className="btn-primary group"
            >
              Start Learning
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/zk_intro"
              className="btn-secondary group"
            >
              What is ZK?
              <SparklesIcon className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-dark-200"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">4</div>
              <div className="text-sm text-dark-600">Learning Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">100%</div>
              <div className="text-sm text-dark-600">Interactive</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">Free</div>
              <div className="text-sm text-dark-600">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">ZK</div>
              <div className="text-sm text-dark-600">Powered</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-dark-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-dark-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}