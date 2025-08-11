import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surimi Tama - Món Ăn Đặc Biệt",
  description:
    "Khám phá thế giới viên thả lẩu với hương vị độc đáo và trải nghiệm ẩm thực tuyệt vời",
  keywords:
    "hotpot, ball, món ăn, ẩm thực, lẩu, đặc biệt, viên thả lẩu, Việt Nam, Surimi Tama",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
