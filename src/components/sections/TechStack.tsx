'use client'

import { motion } from 'framer-motion'
import { 
  CodeBracketIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

const techCategories = [
  {
    title: 'Frontend Framework',
    icon: CodeBracketIcon,
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'Next.js 14', description: 'React framework with App Router', url: 'https://nextjs.org/' },
      { name: 'TypeScript', description: 'Type-safe JavaScript', url: 'https://typescriptlang.org/' },
      { name: 'TailwindCSS', description: 'Utility-first CSS framework', url: 'https://tailwindcss.com/' },
      { name: 'Framer Motion', description: 'Animation library', url: 'https://framer.com/motion/' }
    ]
  },
  {
    title: 'Web3 Integration',
    icon: GlobeAltIcon,
    color: 'from-emerald-500 to-teal-500',
    technologies: [
      { name: 'wagmi', description: 'React hooks for Ethereum', url: 'https://wagmi.sh/' },
      { name: 'RainbowKit', description: 'Wallet connection library', url: 'https://rainbowkit.com/' },
      { name: 'ethers.js', description: 'Ethereum library', url: 'https://ethers.org/' },
      { name: 'viem', description: 'TypeScript Ethereum interface', url: 'https://viem.sh/' }
    ]
  },
  {
    title: 'Zero-Knowledge',
    icon: ShieldCheckIcon,
    color: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'snarkjs', description: 'JavaScript zkSNARK library', url: 'https://github.com/iden3/snarkjs' },
      { name: 'circomlib', description: 'Circuit library for circom', url: 'https://github.com/iden3/circomlib' },
      { name: 'Semaphore', description: 'Zero-knowledge group membership', url: 'https://semaphore.pse.dev/' },
      { name: 'Groth16', description: 'Efficient zkSNARK protocol', url: 'https://eprint.iacr.org/2016/260.pdf' }
    ]
  },
  {
    title: 'Visualization',
    icon: ChartBarIcon,
    color: 'from-orange-500 to-red-500',
    technologies: [
      { name: 'D3.js', description: 'Data visualization library', url: 'https://d3js.org/' },
      { name: 'Recharts', description: 'React charting library', url: 'https://recharts.org/' },
      { name: 'Mermaid', description: 'Diagram and flowchart library', url: 'https://mermaid.js.org/' },
      { name: 'Lucide React', description: 'Beautiful icon library', url: 'https://lucide.dev/' }
    ]
  },
  {
    title: 'Development',
    icon: CpuChipIcon,
    color: 'from-indigo-500 to-purple-500',
    technologies: [
      { name: 'Node.js 18+', description: 'JavaScript runtime', url: 'https://nodejs.org/' },
      { name: 'ESLint', description: 'JavaScript linter', url: 'https://eslint.org/' },
      { name: 'Prettier', description: 'Code formatter', url: 'https://prettier.io/' },
      { name: 'Vercel', description: 'Deployment platform', url: 'https://vercel.com/' }
    ]
  },
  {
    title: 'Testing & Quality',
    icon: BeakerIcon,
    color: 'from-pink-500 to-rose-500',
    technologies: [
      { name: 'Jest', description: 'JavaScript testing framework', url: 'https://jestjs.io/' },
      { name: 'Testing Library', description: 'Simple testing utilities', url: 'https://testing-library.com/' },
      { name: 'TypeScript', description: 'Static type checking', url: 'https://typescriptlang.org/' },
      { name: 'Husky', description: 'Git hooks for quality', url: 'https://typicode.github.io/husky/' }
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function TechStack() {
  return (
    <section className="py-24 bg-white">
      <div className="container-wide section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-dark-100 border border-dark-200 rounded-full px-4 py-2 mb-6">
            <CpuChipIcon className="w-4 h-4 text-dark-600" />
            <span className="text-sm font-medium text-dark-700">
              Modern Technology Stack
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Built with{' '}
            <span className="gradient-text">Cutting-Edge Tools</span>
          </h2>
          
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            Our platform leverages the latest technologies to provide a seamless, 
            secure, and educational experience in zero-knowledge proofs and blockchain development.
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techCategories.map((category, index) => {
            const Icon = category.icon
            
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="card h-full border border-dark-200 group-hover:border-primary-300 group-hover:shadow-glow">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} p-2.5 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-dark-900 group-hover:text-primary-700 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Technologies List */}
                  <div className="space-y-4">
                    {category.technologies.map((tech, i) => (
                      <motion.a
                        key={tech.name}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="block p-3 rounded-lg bg-dark-50 hover:bg-primary-50 border border-dark-100 hover:border-primary-200 transition-all duration-200 group/tech"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-dark-900 group-hover/tech:text-primary-700 transition-colors">
                              {tech.name}
                            </h4>
                            <p className="text-sm text-dark-600 mt-0.5">
                              {tech.description}
                            </p>
                          </div>
                          <svg 
                            className="w-4 h-4 text-dark-400 group-hover/tech:text-primary-600 transition-colors flex-shrink-0 ml-2" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Open Source Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-dark-200"
        >
          <div className="bg-gradient-to-br from-dark-900 via-primary-900 to-secondary-900 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
            
            <div className="relative z-10 text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <BeakerIcon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                100% Open Source & Community Driven
              </h3>
              
              <p className="text-lg text-dark-200 mb-8 max-w-2xl mx-auto">
                All our code is open source and available on GitHub. Contribute to the future 
                of zero-knowledge education and help make privacy-preserving technologies accessible to everyone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://github.com/your-username/my-first-zk-vote"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-dark-900 font-medium rounded-lg hover:bg-dark-100 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </motion.a>
                
                <motion.a
                  href="/contributing"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  Contributing Guide
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}