import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import VideoSection from '@/components/VideoSection'
import GoodFoodSection from '@/components/GoodFoodSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <GoodFoodSection />
    </main>
  )
}