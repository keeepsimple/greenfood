"use client";

import Image from "next/image";
import { useState } from "react";
import productsData from "../../Surimi Tama Products.json";
import ProductModal from "./ProductModal";

// Map products JSON into the shape expected by ProductModal and the cards
const foods = productsData.products.map((p) => {
  const ingredientsArray = p.ingredients
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  // Create a short description from the ingredients string
  const shortDesc = p.ingredients.split(".")[0] || p.ingredients;
  return {
    name: p.name,
    image: `/images/${p.image}`,
    description: shortDesc,
    detailedDescription: p.ingredients,
    ingredients: ingredientsArray,
    price: "Liên hệ",
    variants: p.variants,
  };
});

export default function OurFoodsSection() {
  const [selectedFoodIndex, setSelectedFoodIndex] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedFoodIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFoodIndex(null);
  };

  const nextProduct = () => {
    if (selectedFoodIndex !== null) {
      setSelectedFoodIndex((selectedFoodIndex + 1) % foods.length);
    }
  };

  const prevProduct = () => {
    if (selectedFoodIndex !== null) {
      setSelectedFoodIndex(
        selectedFoodIndex === 0 ? foods.length - 1 : selectedFoodIndex - 1
      );
    }
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Sản Phẩm Của Chúng Tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá bộ sưu tập đầy đủ các viên thả lẩu được chế biến từ nguyên
            liệu tươi ngon nhất, mang đến trải nghiệm ẩm thực tuyệt vời.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {foods.map((food, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative h-64 bg-gray-100">
                <Image
                  src={food.image}
                  alt={food.name}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {food.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {food.description}
                </p>
                <button
                  onClick={() => openModal(index)}
                  className="mt-auto bg-brand-800 hover:bg-brand-700 text-white font-medium px-4 py-2 rounded-full transition-colors text-sm"
                >
                  Xem Chi Tiết
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Liên Hệ Đặt Hàng
            </h2>
            <p className="text-gray-600 mb-6">
              Hãy liên hệ với chúng tôi để được tư vấn và đặt hàng các sản phẩm
              tươi ngon nhất
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61577243606780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-700 transition-colors"
            >
              Đặt Hàng Ngay
            </a>
          </div>
        </div>
      </div>

      <ProductModal
        food={selectedFoodIndex !== null ? foods[selectedFoodIndex] : null}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={nextProduct}
        onPrev={prevProduct}
        currentIndex={selectedFoodIndex || 0}
        totalItems={foods.length}
      />
    </section>
  );
}
