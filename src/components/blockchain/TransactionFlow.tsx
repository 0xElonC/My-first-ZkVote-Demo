'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const transactionStages = [
  {
    id: 1,
    title: 'Transaction Created',
    description: 'User signs transaction with their private key',
    details: 'The wallet creates a transaction object containing recipient address, amount, gas parameters, and cryptographic signature.',
    duration: '< 1 second'
  },
  {
    id: 2,
    title: 'Broadcast to Network',
    description: 'Transaction is sent to the mempool',
    details: 'The signed transaction is propagated across peer-to-peer network nodes, waiting in the mempool for miners/validators to pick it up.',
    duration: '1-5 seconds'
  },
  {
    id: 3,
    title: 'Validation & Mining',
    description: 'Miners/validators verify and include in block',
    details: 'Network participants validate the transaction signature, check account balance, estimate gas, and compete to include it in the next block.',
    duration: '12-15 seconds (Ethereum)'
  },
  {
    id: 4,
    title: 'Block Confirmation',
    description: 'Transaction is confirmed on-chain',
    details: 'Once included in a block, the transaction receives confirmations as subsequent blocks are added, making it increasingly immutable.',
    duration: '~6 blocks for safety'
  }
]

export function TransactionFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleNext = () => {
    if (currentStep < transactionStages.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleAutoPlay = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= transactionStages.length - 1) {
            setIsPlaying(false)
            clearInterval(interval)
            return 0
          }
          return prev + 1
        })
      }, 3000)
    }
  }

  const activeStage = transactionStages[currentStep]

  return (
    <section className="py-16">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-6 text-center">
          Transaction Lifecycle
        </h2>
        <p className="text-lg text-dark-600 text-center max-w-3xl mx-auto">
          Follow the journey of a blockchain transaction from creation to final confirmation
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {transactionStages.map((stage, index) => (
            <div key={stage.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <motion.div
                  initial={false}
                  animate={{
                    scale: currentStep === index ? 1.2 : 1,
                    backgroundColor: currentStep >= index ? '#0ea5e9' : '#e2e8f0'
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    currentStep >= index ? 'text-white' : 'text-dark-400'
                  }`}
                >
                  {currentStep > index ? (
                    <CheckCircleIcon className="w-6 h-6" />
                  ) : (
                    <span className="font-bold">{index + 1}</span>
                  )}
                </motion.div>
                <span className="text-xs text-center text-dark-600 hidden md:block">
                  {stage.title.split(' ')[0]}
                </span>
              </div>
              {index < transactionStages.length - 1 && (
                <div className="flex-1 h-1 bg-dark-200 mx-2">
                  <motion.div
                    initial={false}
                    animate={{
                      width: currentStep > index ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-primary-500"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stage Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Visual Representation */}
        <div className="card h-full">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col justify-center items-center p-8"
          >
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {currentStep === 0 && '📝'}
                  {currentStep === 1 && '📡'}
                  {currentStep === 2 && '⛏️'}
                  {currentStep === 3 && '✅'}
                </div>
                <div className="text-2xl font-bold text-primary-900">
                  Step {currentStep + 1}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-dark-600">
              <ClockIcon className="w-5 h-5" />
              <span className="font-medium">{activeStage.duration}</span>
            </div>
          </motion.div>
        </div>

        {/* Stage Information */}
        <div className="card h-full">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              {activeStage.title}
            </h3>
            
            <p className="text-lg text-primary-700 mb-6 font-medium">
              {activeStage.description}
            </p>
            
            <p className="text-dark-600 leading-relaxed mb-8">
              {activeStage.details}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <div className="text-sm text-dark-600">
                {currentStep + 1} / {transactionStages.length}
              </div>

              <button
                onClick={handleNext}
                disabled={currentStep === transactionStages.length - 1}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Auto-play Control */}
      <div className="mt-8 text-center">
        <button
          onClick={handleAutoPlay}
          className="btn-secondary"
        >
          {isPlaying ? 'Pause' : 'Auto Play'} Animation
        </button>
      </div>
    </section>
  )
}