'use client'

import { motion } from 'framer-motion'
import { CubeIcon } from '@heroicons/react/24/outline'

const transactionFields = [
  {
    field: 'from',
    value: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    description: 'Sender address (your wallet)',
    type: 'address'
  },
  {
    field: 'to',
    value: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    description: 'Recipient address',
    type: 'address'
  },
  {
    field: 'value',
    value: '1000000000000000000',
    description: 'Amount in wei (1 ETH = 10¹⁸ wei)',
    type: 'uint256'
  },
  {
    field: 'gas',
    value: '21000',
    description: 'Gas limit for execution',
    type: 'uint256'
  },
  {
    field: 'gasPrice',
    value: '20000000000',
    description: 'Price per gas unit in wei',
    type: 'uint256'
  },
  {
    field: 'nonce',
    value: '42',
    description: 'Transaction count from sender',
    type: 'uint256'
  },
  {
    field: 'data',
    value: '0x',
    description: 'Optional data payload',
    type: 'bytes'
  },
  {
    field: 'v, r, s',
    value: 'Signature components',
    description: 'ECDSA signature proving authorization',
    type: 'signature'
  }
]

export function TransactionStructure() {
  return (
    <section className="py-16">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-6 text-center">
          Transaction Structure
        </h2>
        <p className="text-lg text-dark-600 text-center max-w-3xl mx-auto">
          Every Ethereum transaction contains these essential fields
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transactionFields.map((item, index) => (
          <motion.div
            key={item.field}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="card group cursor-pointer"
          >
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                <CubeIcon className="w-5 h-5 text-primary-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-mono font-bold text-dark-900 mb-1">
                  {item.field}
                </h3>
                <span className="text-xs text-dark-500 bg-dark-100 px-2 py-1 rounded">
                  {item.type}
                </span>
              </div>
            </div>

            <div className="code-block mb-3 overflow-hidden">
              <code className="text-xs break-all">{item.value}</code>
            </div>

            <p className="text-sm text-dark-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-200">
        <h4 className="font-semibold text-primary-900 mb-3 flex items-center">
          <CubeIcon className="w-5 h-5 mr-2" />
          Transaction Hash
        </h4>
        <p className="text-sm text-primary-700 mb-3">
          All these fields are hashed together to create a unique transaction identifier
        </p>
        <div className="code-block bg-dark-900 text-green-400">
          <code className="text-xs break-all">
            0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3
          </code>
        </div>
      </div>
    </section>
  )
}