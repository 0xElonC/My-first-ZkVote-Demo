# My First ZK Vote

![ZK Vote Banner](https://via.placeholder.com/800x200/0ea5e9/ffffff?text=My+First+ZK+Vote)

🧭 **ZK Education + Interactive Experience Platform**

An educational platform that guides users through the journey from understanding blockchain transactions → experiencing regular voting → understanding and experiencing ZK voting through interactive animations and hands-on demos.

## 🌟 Features

### 📚 Part 1: Blockchain Transaction Introduction (`/intro`)
- **Interactive Animations**: Slideshow explaining transaction lifecycle
- **Visual Flow Charts**: D3.js visualizations of transaction stages
- **Transaction Structure**: Card-based display of transaction components
- **Consensus Mechanisms**: Tabbed comparison of PoW/PoS/Rollup

### 🔐 Part 2: Zero-Knowledge Introduction (`/zk_intro`) 
- **ZK Fundamentals**: Completeness, soundness, and zero-knowledge properties
- **Classification**: zk-SNARK vs zk-STARK comparison
- **Groth16 Workflow**: Animated flow from witness → proof → verification
- **Real-world Applications**: Privacy transactions, rollups, anonymous voting

### 🗳️ Part 3: Traditional Voting Simulation (`/vote_simulate`)
- **Sepolia Integration**: Real blockchain voting with MetaMask
- **Live Transaction Tracking**: Etherscan integration
- **Interactive UI**: Multi-option voting interface
- **Status Animations**: "Pending" → "Confirmed" transitions

### ⚡ Part 4: ZK Voting Experience (`/zk_vote_proof`)
- **Client-side Proof Generation**: snarkjs integration
- **Semaphore Circuit**: Privacy-preserving group membership
- **Zero-Knowledge Verification**: On-chain proof verification
- **Anonymous Voting**: Vote without revealing identity

### 📊 Part 5: Results Dashboard (`/result`)
- **Data Visualization**: Recharts-powered voting statistics
- **Real-time Updates**: Live vote counting
- **Comparison Analytics**: Traditional vs ZK voting metrics

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 + TypeScript + TailwindCSS
- **Animations**: Framer Motion + D3.js
- **Web3**: wagmi + RainbowKit + ethers.js
- **ZK**: snarkjs + circomlib + Semaphore
- **Visualization**: Recharts + Mermaid diagrams
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Git
- MetaMask wallet

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/my-first-zk-vote.git
cd my-first-zk-vote

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Setup

Create a `.env.local` file:

```env
# Optional: Analytics and tracking
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Optional: Custom RPC endpoints
NEXT_PUBLIC_SEPOLIA_RPC=your_sepolia_rpc_url
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── intro/             # Blockchain transaction intro
│   ├── zk_intro/          # Zero-knowledge concepts
│   ├── vote_simulate/     # Traditional voting demo
│   ├── zk_vote_proof/     # ZK voting experience
│   ├── result/            # Results dashboard
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI elements
│   ├── layout/           # Navigation, footer
│   ├── animations/       # Motion components
│   └── zk/               # ZK-specific components
├── lib/                  # Utilities and configurations
│   ├── web3/            # Blockchain utilities
│   ├── zk/              # Zero-knowledge utilities
│   └── utils.ts         # General utilities
├── types/               # TypeScript type definitions
└── styles/              # Global styles
```

## 🔧 Key Components

### ZK Proof Generation
```typescript
// Generate zero-knowledge proof client-side
const proof = await generateZKProof({
  secret: userSecret,
  nullifierHash: nullifier,
  merkleProof: membershipProof
});
```

### Interactive Animations
```typescript
// Framer Motion transaction flow
<motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <TransactionStage />
</motion.div>
```

### Web3 Integration
```typescript
// wagmi + RainbowKit setup
const { data: hash } = useWriteContract({
  address: VOTING_CONTRACT,
  abi: votingABI,
  functionName: 'vote',
  args: [optionId]
});
```

## 🎯 Learning Path

1. **📖 Blockchain Basics** (`/intro`)
   - Transaction lifecycle
   - Gas and fees
   - Consensus mechanisms

2. **🔐 ZK Fundamentals** (`/zk_intro`)
   - Zero-knowledge properties
   - Proof systems comparison
   - Groth16 protocol

3. **🗳️ Traditional Voting** (`/vote_simulate`)
   - On-chain voting
   - Transaction transparency
   - Public verification

4. **⚡ ZK Voting** (`/zk_vote_proof`)
   - Anonymous participation
   - Privacy preservation
   - Cryptographic proofs

5. **📊 Analysis** (`/result`)
   - Compare voting methods
   - Understand trade-offs
   - Explore applications

## 🔗 Related Projects

- **Semaphore Protocol**: [github.com/semaphore-protocol/semaphore](https://github.com/semaphore-protocol/semaphore)
- **snarkjs**: [github.com/iden3/snarkjs](https://github.com/iden3/snarkjs)
- **circomlib**: [github.com/iden3/circomlib](https://github.com/iden3/circomlib)
- **ZK Email**: [github.com/zkemail/zkemail](https://github.com/zkemail/zkemail)

## 📚 Educational Resources

- [Zero-Knowledge Proofs: An Illustrated Primer](https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/)
- [Groth16 Protocol Explained](https://eprint.iacr.org/2016/260.pdf)
- [Semaphore Documentation](https://semaphore.pse.dev/)
- [ZK-SNARKs in a Nutshell](https://chriseth.github.io/notes/articles/zksnarks/zksnarks.pdf)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **LXDAO**: For the inspiration from MyFirstNFT project
- **Semaphore Team**: For the zero-knowledge group membership protocol
- **iden3**: For snarkjs and circom tools
- **Ethereum Foundation**: For supporting ZK research and development

## 🌐 Community

- **Website**: [my-first-zk-vote.vercel.app](https://my-first-zk-vote.vercel.app)
- **Twitter**: [@MyFirstZKVote](https://twitter.com/MyFirstZKVote)
- **Discord**: [Join our community](https://discord.gg/zkteaching)
- **Telegram**: [ZK Education Group](https://t.me/zkteaching)

---

**Learn, Vote, Prove!** 🗳️⚡🔐

*Made with ❤️ by the ZK Education Team*