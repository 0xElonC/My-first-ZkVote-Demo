'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'zh' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved === 'zh' || saved === 'en') {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

// 翻译内容
const translations = {
  zh: {
    nav: {
      home: '首页',
      blockchainIntro: '区块链介绍',
      zkConcepts: 'ZK 概念',
      traditionalVote: '传统投票',
      zkVote: 'ZK 投票',
      results: '结果',
      connect: '连接钱包',
      disconnect: '断开连接',
    },
    hero: {
      title: '我的第一次 ZK 投票',
      subtitle: '通过零知识证明探索匿名投票的未来',
      description: '学习区块链基础、理解零知识证明，并亲身体验如何在保护隐私的同时进行透明投票。',
      getStarted: '开始学习',
      learnMore: '了解更多',
    },
    features: {
      title: '为什么选择 ZK 投票？',
      subtitle: '探索零知识证明在投票系统中的优势',
      privacy: {
        title: '完全隐私',
        description: '使用零知识证明保护您的投票选择，同时保持透明度',
      },
      verifiable: {
        title: '可验证性',
        description: '任何人都可以验证投票结果的正确性，无需透露个人投票',
      },
      decentralized: {
        title: '去中心化',
        description: '建立在以太坊上，没有中心化的权威机构控制投票过程',
      },
      transparent: {
        title: '透明公开',
        description: '所有投票记录在区块链上公开可见，确保投票公正',
      },
    },
    learningPath: {
      title: '您的学习之旅',
      subtitle: '循序渐进地掌握 ZK 投票技术',
      step1: {
        title: '区块链基础',
        description: '了解区块链、交易和智能合约的基本概念',
      },
      step2: {
        title: 'ZK 证明概念',
        description: '学习零知识证明如何实现隐私保护的验证',
      },
      step3: {
        title: '传统投票',
        description: '体验标准的链上投票系统及其局限性',
      },
      step4: {
        title: 'ZK 投票',
        description: '使用零知识证明进行私密投票',
      },
      step5: {
        title: '结果分析',
        description: '查看投票结果和区块链数据的可视化',
      },
    },
    techStack: {
      title: '技术栈',
      subtitle: '构建现代 ZK 投票系统的工具',
      blockchain: '区块链',
      zkProofs: 'ZK 证明',
      frontend: '前端开发',
    },
    footer: {
      description: '一个教育平台，帮助您理解和体验零知识证明投票系统。',
      quickLinks: '快速链接',
      resources: '资源',
      documentation: '文档',
      tutorials: '教程',
      github: 'GitHub',
      community: '社区',
      discord: 'Discord',
      twitter: 'Twitter',
      forum: '论坛',
      rights: '版权所有',
    },
  },
  en: {
    nav: {
      home: 'Home',
      blockchainIntro: 'Blockchain Intro',
      zkConcepts: 'ZK Concepts',
      traditionalVote: 'Traditional Vote',
      zkVote: 'ZK Vote',
      results: 'Results',
      connect: 'Connect Wallet',
      disconnect: 'Disconnect',
    },
    hero: {
      title: 'My First ZK Vote',
      subtitle: 'Explore the Future of Anonymous Voting with Zero-Knowledge Proofs',
      description: 'Learn blockchain fundamentals, understand zero-knowledge proofs, and experience firsthand how to vote transparently while protecting privacy.',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
    },
    features: {
      title: 'Why ZK Voting?',
      subtitle: 'Discover the advantages of zero-knowledge proofs in voting systems',
      privacy: {
        title: 'Complete Privacy',
        description: 'Protect your vote choice using zero-knowledge proofs while maintaining transparency',
      },
      verifiable: {
        title: 'Verifiability',
        description: 'Anyone can verify the correctness of voting results without revealing individual votes',
      },
      decentralized: {
        title: 'Decentralized',
        description: 'Built on Ethereum, no centralized authority controls the voting process',
      },
      transparent: {
        title: 'Transparent',
        description: 'All voting records are publicly visible on the blockchain, ensuring fair voting',
      },
    },
    learningPath: {
      title: 'Your Learning Journey',
      subtitle: 'Master ZK voting technology step by step',
      step1: {
        title: 'Blockchain Basics',
        description: 'Understand the fundamental concepts of blockchain, transactions, and smart contracts',
      },
      step2: {
        title: 'ZK Proof Concepts',
        description: 'Learn how zero-knowledge proofs enable privacy-preserving verification',
      },
      step3: {
        title: 'Traditional Voting',
        description: 'Experience standard on-chain voting systems and their limitations',
      },
      step4: {
        title: 'ZK Voting',
        description: 'Cast private votes using zero-knowledge proofs',
      },
      step5: {
        title: 'Results Analysis',
        description: 'View voting results and blockchain data visualizations',
      },
    },
    techStack: {
      title: 'Technology Stack',
      subtitle: 'Tools for building modern ZK voting systems',
      blockchain: 'Blockchain',
      zkProofs: 'ZK Proofs',
      frontend: 'Frontend',
    },
    footer: {
      description: 'An educational platform to help you understand and experience zero-knowledge proof voting systems.',
      quickLinks: 'Quick Links',
      resources: 'Resources',
      documentation: 'Documentation',
      tutorials: 'Tutorials',
      github: 'GitHub',
      community: 'Community',
      discord: 'Discord',
      twitter: 'Twitter',
      forum: 'Forum',
      rights: 'All rights reserved',
    },
  },
}
