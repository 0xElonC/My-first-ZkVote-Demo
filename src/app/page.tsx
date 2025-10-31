import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { LearningPath } from '@/components/sections/LearningPath'
import { TechStack } from '@/components/sections/TechStack'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <LearningPath />
      <TechStack />
    </div>
  )
}