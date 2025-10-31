# Getting Started with My First ZK Vote

This project was created to help developers understand zero-knowledge proofs through interactive blockchain voting experiences.

## Prerequisites

Before you begin, make sure you have the following installed:
- Node.js 18.x or later
- npm or yarn package manager
- Git
- A modern web browser
- MetaMask or another Web3 wallet

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/my-first-zk-vote.git
cd my-first-zk-vote
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Set up environment variables (optional)
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration if needed. The app will work without any environment variables for basic functionality.

### 4. Start the development server
```bash
npm run dev
# or
yarn dev
```

### 5. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/                    # Next.js 13+ App Router pages
│   ├── intro/             # Blockchain transaction introduction
│   ├── zk_intro/          # Zero-knowledge concepts
│   ├── vote_simulate/     # Traditional voting demo
│   ├── zk_vote_proof/     # ZK voting experience
│   ├── result/            # Results dashboard
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── providers.tsx      # App providers (wagmi, etc.)
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI elements
│   ├── layout/           # Navigation, footer
│   ├── sections/         # Homepage sections
│   ├── blockchain/       # Blockchain education components
│   ├── zk/               # ZK-specific components
│   └── animations/       # Motion components
├── lib/                  # Utilities and configurations
│   ├── web3/            # Blockchain utilities
│   ├── zk/              # Zero-knowledge utilities
│   └── utils.ts         # General utilities
├── types/               # TypeScript type definitions
└── styles/              # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Features

### 🎓 Educational Modules
- **Blockchain Basics**: Understanding transactions, consensus, and immutability
- **ZK Fundamentals**: Learn zero-knowledge proofs, Groth16, and cryptographic primitives
- **Interactive Demos**: Hands-on experience with real blockchain transactions
- **Visual Learning**: Animated explanations and interactive flowcharts

### 🗳️ Voting Experiences
- **Traditional Voting**: Experience on-chain voting with MetaMask
- **ZK Anonymous Voting**: Vote anonymously using zero-knowledge proofs
- **Real-time Results**: Live voting statistics and comparisons

### 🛠️ Technical Implementation
- **Web3 Integration**: wagmi + RainbowKit for wallet connections
- **Zero-Knowledge**: snarkjs for client-side proof generation
- **Modern UI**: Next.js 14 + TypeScript + TailwindCSS
- **Smooth Animations**: Framer Motion for educational animations

## Learning Path

1. **Start Here**: [Blockchain Introduction](/intro)
   - Understand how blockchain transactions work
   - Learn about consensus mechanisms
   - Explore transaction structure

2. **ZK Concepts**: [Zero-Knowledge Introduction](/zk_intro)
   - What are zero-knowledge proofs?
   - Groth16 protocol explained
   - Real-world applications

3. **Practice**: [Traditional Voting](/vote_simulate)
   - Connect your wallet
   - Make an on-chain vote
   - See transaction transparency

4. **Advanced**: [ZK Voting](/zk_vote_proof)
   - Anonymous group membership
   - Generate ZK proofs
   - Private voting experience

5. **Analysis**: [Results & Comparison](/result)
   - Compare voting methods
   - Understand trade-offs
   - Explore use cases

## Troubleshooting

### Common Issues

**Dependencies installation fails:**
```bash
# Try clearing npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Run type checking
npm run type-check
```

**Wallet connection issues:**
- Make sure MetaMask is installed and unlocked
- Switch to Sepolia testnet for testing
- Clear browser cache if needed

**Build fails:**
```bash
# Check for linting errors
npm run lint

# Try building with more memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Getting Help

- Check the [Issues](https://github.com/your-username/my-first-zk-vote/issues) page
- Join our [Discord community](https://discord.gg/zkteaching)
- Read the [documentation](https://docs.my-first-zk-vote.com)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests if applicable
5. Run linting: `npm run lint`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to your branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy automatically on every push

### Manual Deployment

```bash
# Build the project
npm run build

# The output will be in the `.next` folder
# Deploy the contents to your hosting provider
```

## Technical Details

### Zero-Knowledge Integration

The project uses several ZK libraries:
- **snarkjs**: For generating and verifying proofs
- **circomlib**: Circuit library for common operations
- **Semaphore**: Anonymous group membership protocol

### Smart Contracts

Demo contracts are deployed on Sepolia testnet:
- Traditional Voting: `0x1234...` (replace with actual)
- ZK Voting: `0x5678...` (replace with actual)

### Browser Compatibility

- Chrome 90+ ✅
- Firefox 88+ ✅  
- Safari 14+ ✅
- Edge 90+ ✅

## Security Considerations

- This is an educational platform - not for production voting
- Private keys are generated client-side for demos
- No personal data is stored or transmitted
- All ZK proofs are generated in the browser

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [LXDAO](https://lxdao.io/) for inspiration from MyFirstNFT
- [Semaphore Team](https://semaphore.pse.dev/) for ZK group membership
- [iden3](https://iden3.io/) for snarkjs and circom tools
- [Ethereum Foundation](https://ethereum.org/) for supporting ZK research

---

**Happy Learning!** 🎓⚡🗳️

*Built with ❤️ for the ZK community*