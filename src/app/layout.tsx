import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hotpot Ball - Món Ăn Đặc Biệt',
  description: 'Khám phá thế giới hotpot ball với hương vị độc đáo và trải nghiệm ẩm thực tuyệt vời',
  keywords: 'hotpot, ball, món ăn, ẩm thực, lẩu, đặc biệt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}