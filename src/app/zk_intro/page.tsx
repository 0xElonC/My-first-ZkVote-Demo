'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, LockClosedIcon, CheckCircleIcon, CpuChipIcon, AcademicCapIcon, BeakerIcon, CircleStackIcon, KeyIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ZKIntroPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)

  const zkConcepts = [
    {
      icon: ShieldCheckIcon,
      title: '什么是零知识证明？',
      titleEn: 'What is Zero-Knowledge Proof?',
      description: '零知识证明（ZKP）是一种加密协议，允许证明者向验证者证明某个陈述是真实的，而无需透露除了该陈述真实性之外的任何信息。',
      descriptionEn: 'Zero-Knowledge Proof (ZKP) is a cryptographic protocol that allows a prover to demonstrate to a verifier that a statement is true without revealing any information beyond the validity of the statement itself.',
      examples: [
        { 
          zh: '证明你知道密码，但不透露密码本身',
          en: 'Prove you know a password without revealing the password'
        },
        { 
          zh: '证明你的年龄超过18岁，但不透露具体年龄',
          en: 'Prove your age is over 18 without revealing exact age'
        },
        { 
          zh: '证明你投了某个候选人，但不透露是哪个候选人',
          en: 'Prove you voted for a candidate without revealing which one'
        }
      ]
    },
    {
      icon: AcademicCapIcon,
      title: '密码学基础：椭圆曲线与配对',
      titleEn: 'Cryptographic Foundations: Elliptic Curves & Pairings',
      description: 'ZK-SNARK 基于椭圆曲线密码学和双线性配对函数，这些数学工具是零知识证明安全性的基石。',
      descriptionEn: 'ZK-SNARK is based on elliptic curve cryptography and bilinear pairing functions, which are the foundation of zero-knowledge proof security.',
    },
    {
      icon: BeakerIcon,
      title: 'R1CS 约束系统',
      titleEn: 'R1CS Constraint System',
      description: 'Rank-1 Constraint System (R1CS) 是将计算转换为代数约束的标准方法，是电路设计的核心。',
      descriptionEn: 'Rank-1 Constraint System (R1CS) is the standard method for converting computations into algebraic constraints, core to circuit design.',
    },
    {
      icon: CircleStackIcon,
      title: 'QAP 与多项式转换',
      titleEn: 'QAP & Polynomial Transformation',
      description: 'Quadratic Arithmetic Program (QAP) 将 R1CS 约束转换为多项式形式，使得可以使用多项式承诺方案。',
      descriptionEn: 'Quadratic Arithmetic Program (QAP) transforms R1CS constraints into polynomial form, enabling polynomial commitment schemes.',
    },
    {
      icon: KeyIcon,
      title: 'Trusted Setup 可信设置',
      titleEn: 'Trusted Setup',
      description: '可信设置是 Groth16 的关键步骤，涉及生成公共参考串（CRS）和有毒废料（Toxic Waste）的处理。',
      descriptionEn: 'Trusted setup is a critical step in Groth16, involving generation of Common Reference String (CRS) and handling of Toxic Waste.',
    },
    {
      icon: LockClosedIcon,
      title: 'Witness 与电路执行',
      titleEn: 'Witness & Circuit Execution',
      description: 'Witness 是满足电路约束的具体变量赋值，是连接私密输入和公开输出的桥梁。',
      descriptionEn: 'Witness is the specific variable assignment satisfying circuit constraints, bridging private inputs and public outputs.',
    },
    {
      icon: CpuChipIcon,
      title: 'Groth16 算法详解',
      titleEn: 'Groth16 Algorithm Deep Dive',
      description: 'Groth16 是最高效的 ZK-SNARK 算法，证明大小仅 128 字节（2 个 G1 点 + 1 个 G2 点）。',
      descriptionEn: 'Groth16 is the most efficient ZK-SNARK algorithm, with proof size only 128 bytes (2 G1 points + 1 G2 point).',
    },
    {
      icon: CheckCircleIcon,
      title: '投票电路设计实例',
      titleEn: 'Voting Circuit Design Example',
      description: '详细分析如何设计一个完整的投票电路，包括约束生成、优化技巧和安全性考虑。',
      descriptionEn: 'Detailed analysis of designing a complete voting circuit, including constraint generation, optimization techniques, and security considerations.',
    }
  ]

  const isZh = true // 从 context 获取

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {isZh ? '零知识证明' : 'Zero-Knowledge Proofs'}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {isZh ? '核心概念' : 'Core Concepts'}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isZh 
              ? '深入理解零知识证明的原理、特性和实现方式，为构建隐私保护的区块链应用打下基础。'
              : 'Deep dive into the principles, properties, and implementations of zero-knowledge proofs to build privacy-preserving blockchain applications.'}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {zkConcepts.map((concept, index) => {
            const Icon = concept.icon
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{isZh ? concept.title : concept.titleEn}</span>
              </button>
            )
          })}
        </div>

        {/* Content Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          {activeTab === 0 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <ShieldCheckIcon className="w-8 h-8 mr-3 text-purple-600" />
                  {isZh ? zkConcepts[0].title : zkConcepts[0].titleEn}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {isZh ? zkConcepts[0].description : zkConcepts[0].descriptionEn}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {isZh ? '实际应用例子：' : 'Real-World Examples:'}
                </h3>
                <div className="space-y-3">
                  {zkConcepts[0].examples.map((example, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{isZh ? example.zh : example.en}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <p className="text-gray-700 italic">
                  {isZh 
                    ? '💡 关键点：零知识证明让我们能够在保护隐私的同时进行可信的验证，这在投票系统中至关重要。'
                    : '💡 Key Point: Zero-knowledge proofs enable trusted verification while protecting privacy, which is crucial in voting systems.'}
                </p>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <LockClosedIcon className="w-8 h-8 mr-3 text-purple-600" />
                  {isZh ? zkConcepts[1].title : zkConcepts[1].titleEn}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {isZh ? zkConcepts[1].description : zkConcepts[1].descriptionEn}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {zkConcepts[1].properties.map((prop, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                    <div className="text-4xl font-bold text-purple-600 mb-3">{idx + 1}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {isZh ? prop.name : prop.nameEn}
                    </h3>
                    <p className="text-gray-600">{isZh ? prop.desc : prop.descEn}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {isZh ? '🔐 为什么这三个性质很重要？' : '🔐 Why Are These Three Properties Important?'}
                </h3>
                <p className="text-gray-700">
                  {isZh
                    ? '这三个性质确保了零知识证明系统既安全又实用。完整性保证了诚实的用户不会被拒绝，可靠性防止欺诈，零知识性保护了隐私。'
                    : 'These three properties ensure that the zero-knowledge proof system is both secure and practical. Completeness ensures honest users are not rejected, soundness prevents fraud, and zero-knowledge protects privacy.'}
                </p>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircleIcon className="w-8 h-8 mr-3 text-purple-600" />
                  {isZh ? zkConcepts[2].title : zkConcepts[2].titleEn}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {isZh ? zkConcepts[2].description : zkConcepts[2].descriptionEn}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {zkConcepts[2].features.map((feature, idx) => (
                  <div key={idx} className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircleIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{isZh ? feature.desc : feature.descEn}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {isZh ? '📊 ZK-SNARK 的优势' : '📊 Advantages of ZK-SNARK'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {isZh ? '证明大小固定且极小（几百字节）' : 'Fixed and minimal proof size (a few hundred bytes)'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {isZh ? '验证时间恒定（毫秒级）' : 'Constant verification time (milliseconds)'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {isZh ? '适合区块链环境（低 Gas 费用）' : 'Suitable for blockchain (low gas costs)'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {isZh ? '已被广泛应用（Zcash、Tornado Cash 等）' : 'Widely adopted (Zcash, Tornado Cash, etc.)'}
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <CpuChipIcon className="w-8 h-8 mr-3 text-purple-600" />
                  {isZh ? zkConcepts[3].title : zkConcepts[3].titleEn}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {isZh ? zkConcepts[3].description : zkConcepts[3].descriptionEn}
                </p>
              </div>

              <div className="space-y-4">
                {zkConcepts[3].workflow.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-600"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {isZh ? step.step : step.stepEn}
                    </h3>
                    <p className="text-gray-700">{isZh ? step.desc : step.descEn}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ⚠️ {isZh ? '可信设置的重要性' : 'Importance of Trusted Setup'}
                </h3>
                <p className="text-gray-700 mb-3">
                  {isZh
                    ? 'Groth16 需要进行"可信设置"仪式。如果设置过程中的秘密参数被泄露，整个系统的安全性将被破坏。因此，通常采用多方计算（MPC）来生成这些参数。'
                    : 'Groth16 requires a "trusted setup" ceremony. If the secret parameters from the setup are leaked, the entire system\'s security is compromised. Therefore, Multi-Party Computation (MPC) is typically used to generate these parameters.'}
                </p>
                <p className="text-gray-700">
                  {isZh
                    ? '💡 只要至少有一个参与者诚实地销毁了他们的秘密，整个系统就是安全的。'
                    : '💡 As long as at least one participant honestly destroys their secret, the entire system remains secure.'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {isZh ? '🎯 在投票系统中的应用' : '🎯 Application in Voting Systems'}
                </h3>
                <p className="text-gray-700">
                  {isZh
                    ? '使用 Groth16，我们可以证明"我投了一个有效的票"而不透露具体投给了谁。电路会验证：1) 选择是有效的选项之一，2) 投票者有投票权，3) 投票者没有重复投票。'
                    : 'Using Groth16, we can prove "I cast a valid vote" without revealing who we voted for. The circuit verifies: 1) The choice is one of the valid options, 2) The voter has voting rights, 3) The voter hasn\'t voted twice.'}
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="/vote_simulate"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            {isZh ? '下一步：体验传统投票' : 'Next: Experience Traditional Voting'}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </main>
  )
}
