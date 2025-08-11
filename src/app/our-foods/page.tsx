import Header from "@/components/Header";
import OurFoodsSection from "@/components/OurFoodsSection";

export const metadata = {
  title: "Sản phẩm của chúng tôi - Viên thả lẩu",
  description: "Khám phá bộ sưu tập đầy đủ các loại viên thả lẩu của chúng tôi",
};

export default function OurFoodsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <OurFoodsSection />
    </main>
  );
}
