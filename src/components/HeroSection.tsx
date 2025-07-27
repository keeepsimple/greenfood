'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-lime-400 rounded-3xl p-8 lg:p-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Những món nóng hổi.<br />
              Những hương vị tuyệt vời.
            </h1>
            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              Đặt đồ ăn bất cứ lúc nào và chúng tôi sẽ giao hàng an toàn 
              đến tận nhà và <span className="font-semibold">NHIỀU HƠN NỮA</span>.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Đặt Hàng Ngay
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <Image
                  src="/images/IMG_2861.JPG"
                  alt="Hotpot bowl"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <Image
                  src="/images/IMG_2865.JPG"
                  alt="Noodle dish"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <Image
                  src="/images/IMG_2870.JPG"
                  alt="Salad bowl"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <Image
                  src="/images/IMG_2901.JPG"
                  alt="Dessert plate"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}