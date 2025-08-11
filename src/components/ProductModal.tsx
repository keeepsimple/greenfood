"use client";

import Image from "next/image";
import { useEffect } from "react";

interface FoodVariant {
  weight: string;
  product_code: string;
}

interface Food {
  name: string;
  image: string;
  description: string;
  detailedDescription: string;
  ingredients: string[];
  price: string;
  variants?: FoodVariant[];
}

interface ProductModalProps {
  food: Food | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalItems: number;
}

export default function ProductModal({
  food,
  isOpen,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalItems,
}: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !food) return null;

  const derivedTags = (() => {
    const text = (
      food.detailedDescription +
      " " +
      food.ingredients.join(" ")
    ).toLowerCase();
    const tags: string[] = [];
    if (/(trứng|bột trứng)/.test(text)) tags.push("Trứng");
    if (/(đậu nành|dầu nành|\bđậu\b)/.test(text)) tags.push("Đậu nành");
    if (/tôm/.test(text)) tags.push("Tôm");
    if (/cua/.test(text)) tags.push("Cua");
    if (/mực/.test(text)) tags.push("Mực");
    return tags;
  })();

  return (
    <div
      className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-5xl w-full h-[90vh] overflow-hidden relative">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow transition"
        >
          <svg
            className="w-6 h-6 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left: Image (non-scrollable) */}
          <div className="relative bg-gray-100 h-64 lg:h-full">
            <Image
              src={food.image}
              alt={food.name}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* Prev/Next */}
            <button
              onClick={onPrev}
              aria-label="Sản phẩm trước"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={onNext}
              aria-label="Sản phẩm tiếp theo"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {totalItems}
            </div>
          </div>

          {/* Right: Content (scrollable) */}
          <div className="flex flex-col overflow-y-auto p-6 lg:p-8">
            {/* Sticky header */}
            <div className="sticky top-0 z-10 -mx-6 lg:-mx-8 px-6 lg:px-8 py-4 bg-white/85 backdrop-blur border-b">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {food.name}
              </h2>
              {derivedTags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {derivedTags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-orange-50 text-orange-800 text-xs font-medium px-2.5 py-1 border border-orange-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-8 flex-1">
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Mô Tả Sản Phẩm
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {food.detailedDescription}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Thành Phần
                </h3>
                <ul className="space-y-2">
                  {food.ingredients.map((ingredient, index) => {
                    const text = ingredient.trim();
                    const display = text
                      ? text.charAt(0).toUpperCase() + text.slice(1)
                      : text;
                    return (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <div className="w-2 h-2 bg-brand-800 rounded-full mr-3" />
                        {display}
                      </li>
                    );
                  })}
                </ul>
              </section>

              {food.variants && food.variants.length > 0 && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Quy Cách Đóng Gói
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {food.variants.map((v, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 border border-gray-200"
                      >
                        {v.weight} • {v.product_code}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
