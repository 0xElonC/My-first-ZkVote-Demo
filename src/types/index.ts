// Core types for the application

export interface User {
  address: string
  ensName?: string
  avatar?: string
}

export interface VotingOption {
  id: number
  title: string
  description: string
  votes: number
}

export interface Vote {
  id: string
  voter: string
  option: number
  timestamp: number
  txHash: string
  blockNumber?: number
  gasUsed?: string
}

export interface ZKVote {
  id: string
  nullifierHash: string
  merkleRoot: string
  option: number
  timestamp: number
  proof: ZKProof
  txHash: string
  blockNumber?: number
}

export interface ZKProof {
  pi_a: [string, string]
  pi_b: [[string, string], [string, string]]
  pi_c: [string, string]
  protocol: string
  curve: string
}

export interface Transaction {
  hash: string
  from: string
  to: string
  value: string
  gasLimit: string
  gasPrice: string
  gasUsed?: string
  blockNumber?: number
  blockHash?: string
  timestamp?: number
  status: 'pending' | 'confirmed' | 'failed'
  data?: string
  nonce?: number
}

export interface Block {
  number: number
  hash: string
  parentHash: string
  timestamp: number
  gasLimit: string
  gasUsed: string
  transactions: Transaction[]
  miner: string
  difficulty: string
  totalDifficulty: string
}

export interface NetworkStats {
  totalVotes: number
  totalZKVotes: number
  totalParticipants: number
  averageGasUsed: string
  averageConfirmationTime: number
}

export interface LearningProgress {
  completedModules: string[]
  currentModule: string
  totalTimeSpent: number
  lastVisit: number
}

export interface AnimationState {
  isPlaying: boolean
  currentStep: number
  totalSteps: number
  speed: number
}

// ZK-specific types
export interface CircuitInputs {
  secret: string
  nullifierHash: string
  merkleRoot: string
  merkleProof: string[]
  merklePathIndices: number[]
}

export interface SemaphoreIdentity {
  privateKey: string
  commitment: string
  nullifier: string
}

export interface MerkleTree {
  root: string
  leaves: string[]
  depth: number
}

// Consensus mechanism types
export type ConsensusType = 'pow' | 'pos' | 'rollup'

export interface ConsensusInfo {
  type: ConsensusType
  name: string
  description: string
  energyEfficiency: number
  scalability: number
  decentralization: number
  security: number
  examples: string[]
}

// Component props types
export interface StepProps {
  isActive: boolean
  isCompleted: boolean
  stepNumber: number
  title: string
  description: string
  onNext?: () => void
  onPrevious?: () => void
}

export interface ProgressProps {
  current: number
  total: number
  title?: string
  showPercentage?: boolean
}

export interface ToastMessage {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  description?: string
  duration?: number
}