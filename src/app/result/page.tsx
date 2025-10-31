'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChartBarIcon, ShieldCheckIcon, UsersIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ResultPage() {
  const [viewMode, setViewMode] = useState<'traditional' | 'zk'>('zk')

  const voteData = {
    traditional: {
      total: 150,
      candidates: [
        { id: 1, name: '候选人 A / Candidate A', votes: 65, percentage: 43.3, color: 'bg-blue-500' },
        { id: 2, name: '候选人 B / Candidate B', votes: 52, percentage: 34.7, color: 'bg-purple-500' },
        { id: 3, name: '候选人 C / Candidate C', votes: 33, percentage: 22.0, color: 'bg-pink-500' }
      ]
    },
    zk: {
      total: 150,
      candidates: [
        { id: 1, name: '候选人 A / Candidate A', votes: 65, percentage: 43.3, color: 'bg-blue-500' },
        { id: 2, name: '候选人 B / Candidate B', votes: 52, percentage: 34.7, color: 'bg-purple-500' },
        { id: 3, name: '候选人 C / Candidate C', votes: 33, percentage: 22.0, color: 'bg-pink-500' }
      ],
      proofs: 150,
      verifiedProofs: 150
    }
  }

  const currentData = viewMode === 'traditional' ? voteData.traditional : voteData.zk

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            投票结果
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Voting Results
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            查看实时投票统计和数据分析
            <br />
            View real-time voting statistics and data analysis
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <button
              onClick={() => setViewMode('traditional')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                viewMode === 'traditional'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              传统投票 / Traditional
            </button>
            <button
              onClick={() => setViewMode('zk')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                viewMode === 'zk'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              ZK 投票 / ZK Voting
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <UsersIcon className="w-8 h-8 text-blue-600" />
              <span className="text-3xl font-bold text-gray-900">{currentData.total}</span>
            </div>
            <div className="text-gray-600">总投票数 / Total Votes</div>
          </motion.div>

          {viewMode === 'zk' && (
            <>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <ShieldCheckIcon className="w-8 h-8 text-purple-600" />
                  <span className="text-3xl font-bold text-gray-900">{voteData.zk.proofs}</span>
                </div>
                <div className="text-gray-600">ZK 证明数 / ZK Proofs</div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <ChartBarIcon className="w-8 h-8 text-green-600" />
                  <span className="text-3xl font-bold text-gray-900">{voteData.zk.verifiedProofs}</span>
                </div>
                <div className="text-gray-600">已验证 / Verified</div>
              </motion.div>
            </>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <ClockIcon className="w-8 h-8 text-pink-600" />
              <span className="text-xl font-bold text-gray-900">实时 / Live</span>
            </div>
            <div className="text-gray-600">投票状态 / Status</div>
          </motion.div>
        </div>

        {/* Results Chart */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Bar Chart */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">得票统计 / Vote Distribution</h2>
            
            <div className="space-y-6">
              {currentData.candidates.map((candidate, idx) => (
                <motion.div
                  key={candidate.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">{candidate.name}</span>
                    <span className="text-gray-600">{candidate.votes} 票</span>
                  </div>
                  <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${candidate.percentage}%` }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                      className={`h-full ${candidate.color} flex items-center justify-end pr-3`}
                    >
                      <span className="text-white font-semibold text-sm">{candidate.percentage.toFixed(1)}%</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pie Chart Visualization */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">候选人排名 / Candidate Ranking</h2>
            
            <div className="space-y-4">
              {currentData.candidates
                .sort((a, b) => b.votes - a.votes)
                .map((candidate, idx) => (
                  <div key={candidate.id} className="flex items-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 rounded-full ${candidate.color} flex items-center justify-center text-white font-bold text-xl mr-4`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{candidate.name}</div>
                      <div className="text-sm text-gray-600">{candidate.votes} 票 ({candidate.percentage.toFixed(1)}%)</div>
                    </div>
                    {idx === 0 && (
                      <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        🏆 领先 / Leading
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            投票方式对比 / Voting Method Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">特性 / Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-900">传统投票 / Traditional</th>
                  <th className="text-center py-4 px-4 font-semibold text-purple-900">ZK 投票 / ZK Voting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: '投票隐私 / Vote Privacy', traditional: '❌ 公开 / Public', zk: '✅ 私密 / Private' },
                  { feature: '结果可验证 / Result Verifiable', traditional: '✅ 是 / Yes', zk: '✅ 是 / Yes' },
                  { feature: '防止作弊 / Fraud Prevention', traditional: '⚠️ 中等 / Medium', zk: '✅ 高 / High' },
                  { feature: '抗胁迫性 / Coercion Resistant', traditional: '❌ 否 / No', zk: '✅ 是 / Yes' },
                  { feature: 'Gas 成本 / Gas Cost', traditional: '💰 ~0.002 ETH', zk: '💰 ~0.001 ETH' },
                  { feature: '验证速度 / Verification Speed', traditional: '⚡ 快 / Fast', zk: '⚡ 很快 / Very Fast' }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-gray-700">{row.traditional}</td>
                    <td className="py-4 px-4 text-center text-purple-700">{row.zk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Technical Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 数据透明度 / Data Transparency</h3>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="font-semibold text-green-900 mb-2">✓ 可验证的结果</div>
                <p className="text-sm text-green-700">
                  所有人都可以独立验证投票结果的正确性
                  <br />
                  Everyone can independently verify the correctness of voting results
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="font-semibold text-blue-900 mb-2">🔍 公开审计</div>
                <p className="text-sm text-blue-700">
                  区块链上的数据完全透明，可以进行公开审计
                  <br />
                  Data on blockchain is fully transparent for public auditing
                </p>
              </div>

              {viewMode === 'zk' && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="font-semibold text-purple-900 mb-2">🔐 隐私保护</div>
                  <p className="text-sm text-purple-700">
                    使用零知识证明保护个人投票隐私
                    <br />
                    Use zero-knowledge proofs to protect individual vote privacy
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎓 学习总结 / Learning Summary</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <div>
                  <strong>区块链基础：</strong>理解了交易、区块和共识机制
                  <br />
                  <span className="text-sm text-gray-500">Blockchain Basics: Understanding transactions, blocks, and consensus</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <div>
                  <strong>零知识证明：</strong>掌握了 ZK-SNARK 和 Groth16 原理
                  <br />
                  <span className="text-sm text-gray-500">Zero-Knowledge Proofs: Mastered ZK-SNARK and Groth16 principles</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <div>
                  <strong>隐私保护：</strong>体验了私密投票的实现方式
                  <br />
                  <span className="text-sm text-gray-500">Privacy Protection: Experienced implementation of private voting</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <div>
                  <strong>智能合约：</strong>了解了链上验证的工作原理
                  <br />
                  <span className="text-sm text-gray-500">Smart Contracts: Understood how on-chain verification works</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <p className="text-sm text-gray-700 font-medium">
                🎉 恭喜你完成了 ZK 投票的完整学习旅程！
                <br />
                Congratulations on completing the full ZK voting learning journey!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Back to Home */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页 / Back to Home
          </a>
        </motion.div>
      </div>
    </main>
  )
}
