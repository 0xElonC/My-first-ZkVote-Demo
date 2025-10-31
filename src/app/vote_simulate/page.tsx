'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  EyeIcon,
  ExclamationTriangleIcon,
  UserIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function VoteSimulatePage() {
  const { address, isConnected } = useAccount()
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [showLimitations, setShowLimitations] = useState(false)

  const candidates = [
    { id: 1, name: '候选人 A / Candidate A', description: '主张提高社区福利 / Improve community welfare', votes: 45 },
    { id: 2, name: '候选人 B / Candidate B', description: '支持教育发展 / Support education development', votes: 38 },
    { id: 3, name: '候选人 C / Candidate C', description: '推动环保政策 / Promote environmental policies', votes: 27 }
  ]

  const limitations = [
    {
      icon: EyeIcon,
      title: '缺乏隐私',
      titleEn: 'Lack of Privacy',
      problem: '所有人都能看到你投给了哪个候选人',
      problemEn: 'Everyone can see who you voted for',
      impact: '可能导致投票者受到压力、贿赂或报复',
      impactEn: 'May lead to voter coercion, bribery, or retaliation'
    },
    {
      icon: UserIcon,
      title: '投票关联',
      titleEn: 'Vote Linkability',
      problem: '投票与你的钱包地址永久关联',
      problemEn: 'Votes are permanently linked to your wallet address',
      impact: '无法实现真正的匿名投票',
      impactEn: 'True anonymous voting is impossible'
    },
    {
      icon: ClockIcon,
      title: '链上数据永久存储',
      titleEn: 'Permanent On-Chain Storage',
      problem: '投票数据永久保存在区块链上',
      problemEn: 'Voting data is permanently stored on blockchain',
      impact: '即使多年后也能追溯到你的投票选择',
      impactEn: 'Your vote choices can be traced even years later'
    }
  ]

  const handleVote = () => {
    if (selectedCandidate && isConnected) {
      setHasVoted(true)
      setShowLimitations(true)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            传统链上投票
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Traditional On-Chain Voting
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            体验标准的区块链投票系统，了解它的优势和局限性
            <br />
            Experience standard blockchain voting and understand its advantages and limitations
          </p>
        </motion.div>

        {/* Connection Warning */}
        {!isConnected && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <div className="flex items-start">
              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  请先连接钱包 / Please Connect Wallet
                </h3>
                <p className="text-gray-700">
                  您需要连接钱包才能参与投票。点击右上角的"连接钱包"按钮。
                  <br />
                  You need to connect your wallet to participate in voting. Click the "Connect Wallet" button in the top right.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Voting Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Voting Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🗳️ 投票选择 / Cast Your Vote
            </h2>

            <div className="space-y-4 mb-8">
              {candidates.map((candidate) => (
                <button
                  key={candidate.id}
                  onClick={() => !hasVoted && setSelectedCandidate(candidate.id)}
                  disabled={hasVoted || !isConnected}
                  className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                    selectedCandidate === candidate.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  } ${hasVoted || !isConnected ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
                    {selectedCandidate === candidate.id && (
                      <CheckCircleIcon className="w-6 h-6 text-purple-600" />
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{candidate.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>当前票数 / Current votes: {candidate.votes}</span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleVote}
              disabled={!selectedCandidate || hasVoted || !isConnected}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                selectedCandidate && !hasVoted && isConnected
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {hasVoted ? '✓ 已投票 / Voted' : '确认投票 / Confirm Vote'}
            </button>

            {hasVoted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4"
              >
                <div className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <p className="font-semibold text-green-900">投票成功！/ Vote Successful!</p>
                    <p className="text-sm text-green-700">
                      你投给了候选人 {selectedCandidate} / You voted for Candidate {selectedCandidate}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Transaction Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              📊 链上数据 / On-Chain Data
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">投票者地址 / Voter Address</div>
                <div className="font-mono text-sm text-gray-900 break-all">
                  {isConnected ? address : '0x0000...0000 (未连接 / Not Connected)'}
                </div>
              </div>

              {hasVoted && selectedCandidate && (
                <>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="text-sm text-gray-600 mb-1">⚠️ 投票选择 / Vote Choice</div>
                    <div className="font-mono text-sm text-red-700">
                      候选人 {selectedCandidate} / Candidate {selectedCandidate}
                    </div>
                    <div className="text-xs text-red-600 mt-2">
                      ⚠️ 公开可见！/ Publicly Visible!
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">区块高度 / Block Height</div>
                    <div className="font-mono text-sm text-gray-900">#12,345,678</div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">时间戳 / Timestamp</div>
                    <div className="font-mono text-sm text-gray-900">
                      {new Date().toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Gas 费用 / Gas Fee</div>
                    <div className="font-mono text-sm text-gray-900">0.002 ETH (~$6)</div>
                  </div>
                </>
              )}
            </div>

            {hasVoted && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start">
                  <EyeIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">
                    <strong>注意：</strong>任何人都可以在区块链浏览器上看到这些信息，包括你的投票选择！
                    <br />
                    <strong>Notice:</strong> Anyone can see this information on a blockchain explorer, including your vote choice!
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Limitations Section */}
        {showLimitations && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  ⚠️ 传统投票的局限性
                  <br />
                  <span className="text-2xl">Limitations of Traditional Voting</span>
                </h2>
                <p className="text-gray-600">
                  虽然区块链保证了透明性和不可篡改性，但传统链上投票存在严重的隐私问题
                  <br />
                  While blockchain ensures transparency and immutability, traditional on-chain voting has serious privacy issues
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {limitations.map((limitation, idx) => {
                  const Icon = limitation.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-red-50 border border-red-200 rounded-xl p-6"
                    >
                      <Icon className="w-10 h-10 text-red-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {limitation.title}
                        <br />
                        <span className="text-lg">{limitation.titleEn}</span>
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-semibold text-gray-700">问题 / Problem:</div>
                          <p className="text-gray-600">{limitation.problem}</p>
                          <p className="text-gray-500 text-sm">{limitation.problemEn}</p>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-700">影响 / Impact:</div>
                          <p className="text-red-700">{limitation.impact}</p>
                          <p className="text-red-600 text-sm">{limitation.impactEn}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  💡 解决方案：零知识证明 / Solution: Zero-Knowledge Proofs
                </h3>
                <p className="text-gray-700 mb-4">
                  零知识证明可以让你证明"我投了一个有效的票"，而不透露具体投给了谁。这样就能在保持投票透明性和可验证性的同时，保护投票者的隐私。
                  <br />
                  <br />
                  Zero-knowledge proofs allow you to prove "I cast a valid vote" without revealing who you voted for. This protects voter privacy while maintaining transparency and verifiability.
                </p>
                <a
                  href="/zk_vote_proof"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  体验 ZK 投票 / Try ZK Voting
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Educational Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📚 传统链上投票的工作原理
            <br />
            <span className="text-xl">How Traditional On-Chain Voting Works</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
                优势 / Advantages
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>完全透明，所有投票记录公开可查 / Fully transparent, all votes publicly verifiable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>不可篡改，投票结果永久保存 / Immutable, voting results permanently stored</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>去中心化，没有中央机构控制 / Decentralized, no central authority</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>实时统计，即时看到结果 / Real-time counting, instant results</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <XCircleIcon className="w-6 h-6 text-red-500 mr-2" />
                劣势 / Disadvantages
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>完全公开，没有投票隐私 / Completely public, no vote privacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>可能受到胁迫或贿赂 / Susceptible to coercion or bribery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>投票与身份永久关联 / Votes permanently linked to identity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Gas 费用相对较高 / Relatively high gas fees</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🔍 技术实现 / Technical Implementation
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>1. 智能合约 / Smart Contract:</strong> 投票逻辑部署在智能合约中，确保规则的自动执行。
                Voting logic deployed in smart contract ensures automatic rule execution.
              </p>
              <p>
                <strong>2. 状态存储 / State Storage:</strong> 每个投票都作为状态变更存储在区块链上。
                Each vote is stored as a state change on the blockchain.
              </p>
              <p>
                <strong>3. 事件日志 / Event Logs:</strong> 投票动作会触发事件，可以被前端应用监听。
                Voting actions trigger events that can be monitored by frontend apps.
              </p>
              <p>
                <strong>4. 权限控制 / Access Control:</strong> 通过智能合约验证投票资格，防止重复投票。
                Smart contract verifies voting eligibility and prevents double voting.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
