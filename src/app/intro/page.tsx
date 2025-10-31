import { TransactionFlow } from '@/components/blockchain/TransactionFlow'
import { TransactionStructure } from '@/components/blockchain/TransactionStructure'
import { ConsensusComparison } from '@/components/blockchain/ConsensusComparison'
import { BlockchainBasics } from '@/components/blockchain/BlockchainBasics'

export default function IntroPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-50 via-primary-50/10 to-secondary-50/10">
      <div className="container-wide section-padding py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-dark-900 mb-6">
            Understanding{' '}
            <span className="gradient-text">Blockchain Transactions</span>
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            Learn how blockchain transactions work from creation to confirmation. 
            This foundational knowledge will help you understand the benefits of zero-knowledge proofs.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-24">
          <BlockchainBasics />
          <TransactionFlow />
          <TransactionStructure />
          <ConsensusComparison />
        </div>
      </div>
    </main>
  )
}