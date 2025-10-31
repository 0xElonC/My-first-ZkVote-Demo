'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useAccount } from 'wagmi'
import { ShieldCheckIcon, LockClosedIcon, CheckCircleIcon, CpuChipIcon } from '@heroicons/react/24/outline'

export default function ZKVoteProofPage() {
  const { address, isConnected } = useAccount()
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [proofGenerated, setProofGenerated] = useState(false)
  const [zkProof, setZkProof] = useState<string>('')

  const candidates = [
    { id: 1, name: '候选人 A / Candidate A' },
    { id: 2, name: '候选人 B / Candidate B' },
    { id: 3, name: '候选人 C / Candidate C' }
  ]

  const generateProof = async () => {
    if (!selectedCandidate) return
    
    setIsGenerating(true)
    // 模拟证明生成
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setZkProof(`0x${Array.from({length: 64}, () => Math.floor(Math.random() * 16).toString(16)).join('')}`)
    setProofGenerated(true)
    setIsGenerating(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            零知识证明投票
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              ZK-SNARK Voting
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            使用 Groth16 零知识证明进行私密投票，保护你的选择隐私
            <br />
            Use Groth16 zero-knowledge proofs for private voting, protecting your choice privacy
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* 投票界面 */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ShieldCheckIcon className="w-7 h-7 mr-2 text-purple-600" />
              私密投票 / Private Voting
            </h2>

            <div className="space-y-4 mb-8">
              {candidates.map((candidate) => (
                <button
                  key={candidate.id}
                  onClick={() => !proofGenerated && setSelectedCandidate(candidate.id)}
                  disabled={proofGenerated || !isConnected}
                  className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                    selectedCandidate === candidate.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  } ${proofGenerated || !isConnected ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
                    {selectedCandidate === candidate.id && <CheckCircleIcon className="w-6 h-6 text-purple-600" />}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={generateProof}
              disabled={!selectedCandidate || proofGenerated || !isConnected || isGenerating}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                selectedCandidate && !proofGenerated && isConnected && !isGenerating
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isGenerating ? '⏳ 生成证明中... / Generating Proof...' : proofGenerated ? '✓ 已提交 / Submitted' : '🔒 生成 ZK 证明 / Generate ZK Proof'}
            </button>
          </motion.div>

          {/* ZK 证明信息 */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <LockClosedIcon className="w-7 h-7 mr-2 text-purple-600" />
              ZK 证明数据 / ZK Proof Data
            </h2>

            {!proofGenerated ? (
              <div className="text-center py-12">
                <CpuChipIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">选择候选人后生成证明 / Select candidate to generate proof</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="text-sm font-semibold text-green-900 mb-2">✓ 证明状态 / Proof Status</div>
                  <div className="text-green-700">证明生成成功！/ Proof generated successfully!</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-2">证明哈希 / Proof Hash</div>
                  <div className="font-mono text-xs text-gray-900 break-all">{zkProof}</div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="text-sm font-semibold text-purple-900 mb-2">🔐 隐私保护 / Privacy Protected</div>
                  <div className="text-purple-700 text-sm">你的投票选择已被加密，链上只显示有效证明 / Your vote is encrypted, only valid proof shown on-chain</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-2">Gas 费用 / Gas Fee</div>
                  <div className="font-mono text-sm text-gray-900">~0.001 ETH (~$3)</div>
                  <div className="text-xs text-gray-500 mt-1">比传统投票节省 50% / 50% cheaper than traditional voting</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* ZK 证明工作流程 */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ZK 证明工作流程 / ZK Proof Workflow
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: '选择候选人', titleEn: 'Select Candidate', desc: '私密地选择你的候选人', descEn: 'Privately select your candidate', icon: '🗳️' },
              { step: '2', title: '生成电路输入', titleEn: 'Generate Circuit Input', desc: '将选择转换为电路约束', descEn: 'Convert choice to circuit constraints', icon: '⚡' },
              { step: '3', title: '生成 ZK 证明', titleEn: 'Generate ZK Proof', desc: '使用 Groth16 算法生成证明', descEn: 'Generate proof using Groth16', icon: '🔐' },
              { step: '4', title: '链上验证', titleEn: 'On-Chain Verification', desc: '智能合约验证证明有效性', descEn: 'Smart contract verifies proof', icon: '✓' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center border border-purple-200"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{item.step}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.titleEn}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
                <p className="text-xs text-gray-400">{item.descEn}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 技术细节 */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🔬 技术原理 / Technical Principles</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <strong>电路设计：</strong>定义投票规则的约束系统
                <br /><span className="text-sm text-gray-500">Circuit Design: Constraint system defining voting rules</span>
              </div>
              <div>
                <strong>见证生成：</strong>包含私密输入（投票选择）和公开输入（投票者 ID）
                <br /><span className="text-sm text-gray-500">Witness Generation: Private input (vote) + public input (voter ID)</span>
              </div>
              <div>
                <strong>证明生成：</strong>使用 Groth16 算法创建简洁的零知识证明
                <br /><span className="text-sm text-gray-500">Proof Generation: Create succinct proof using Groth16</span>
              </div>
              <div>
                <strong>链上验证：</strong>智能合约验证证明，无需知道投票内容
                <br /><span className="text-sm text-gray-500">On-Chain Verification: Smart contract verifies without knowing vote</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 优势对比 / Advantages Comparison</h3>
            <div className="space-y-3">
              {[
                { feature: '隐私保护 / Privacy', traditional: '❌ 完全公开 / Public', zk: '✅ 完全私密 / Private' },
                { feature: '可验证性 / Verifiable', traditional: '✅ 可验证 / Yes', zk: '✅ 可验证 / Yes' },
                { feature: '透明度 / Transparent', traditional: '✅ 透明 / Yes', zk: '✅ 透明 / Yes' },
                { feature: 'Gas 费用 / Gas Cost', traditional: '💰 较高 / Higher', zk: '💰 较低 / Lower' },
                { feature: '抗胁迫 / Coercion Resistant', traditional: '❌ 否 / No', zk: '✅ 是 / Yes' }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-2 p-3 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-sm">{item.feature}</div>
                  <div className="text-sm text-gray-600">{item.traditional}</div>
                  <div className="text-sm text-purple-700">{item.zk}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 下一步 */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-12 text-center">
          <a
            href="/result"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            查看投票结果 / View Results
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </main>
  )
}
