import Header from '@/components/Header'
import OurFoodsSection from '@/components/OurFoodsSection'

export const metadata = {
  title: 'Our Foods - Hotpot Ball Premium',
  description: 'Khám phá bộ sưu tập đầy đủ các loại hotpot ball premium của chúng tôi'
}

export default function OurFoodsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <OurFoodsSection />
    </main>
  )
}