'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProductModal from './ProductModal'

const foods = [
  {
    name: 'Hotpot Ball Cua Stick',
    image: '/images/IMG_2861.JPG',
    description: 'Viên hotpot ball cua tươi ngon với hương vị đậm đà',
    detailedDescription: 'Viên hotpot ball cua được chế biến từ thịt cua tươi ngon, kết hợp với bột cá cao cấp và gia vị đặc biệt. Sản phẩm có kết cấu dai giòn, hương vị ngọt tự nhiên của cua, rất thích hợp cho các món lẩu, nướng hoặc chiên.',
    ingredients: ['Thịt cua tươi 60%', 'Bột cá cao cấp', 'Lòng trắng trứng', 'Tinh bột khoai tây', 'Gia vị tự nhiên', 'Muối biển'],
    price: '125.000đ / kg'
  },
  {
    name: 'Fish Ball Premium',
    image: '/images/IMG_2865.JPG', 
    description: 'Viên cá cao cấp làm từ cá tươi 100%',
    detailedDescription: 'Viên cá premium được làm từ cá tra tươi 100%, không sử dụng chất bảo quản hay phẩm màu nhân tạo. Kết cấu mềm mại, thơm ngon, giàu protein và omega-3 tốt cho sức khỏe.',
    ingredients: ['Cá tra tươi 85%', 'Tinh bột sắn', 'Lòng trắng trứng', 'Dầu thực vật', 'Muối', 'Đường tự nhiên'],
    price: '95.000đ / kg'
  },
  {
    name: 'Mixed Hotpot Set',
    image: '/images/IMG_2870.JPG',
    description: 'Combo đa dạng các loại viên hotpot ball',
    detailedDescription: 'Bộ combo đa dạng bao gồm nhiều loại viên khác nhau: viên cá, viên tôm, viên bò, viên gà. Mỗi loại đều có hương vị riêng biệt, tạo nên trải nghiệm ẩm thực phong phú cho bữa lẩu gia đình.',
    ingredients: ['Viên cá 25%', 'Viên tôm 25%', 'Viên bò 25%', 'Viên gà 25%', 'Gia vị tự nhiên'],
    price: '110.000đ / kg'
  },
  {
    name: 'Shrimp Ball Deluxe',
    image: '/images/IMG_2901.JPG',
    description: 'Viên tôm cao cấp với tôm tươi nguyên con',
    detailedDescription: 'Viên tôm deluxe được làm từ tôm sú tươi nguyên con, giữ nguyên vị ngọt tự nhiên của tôm. Bên trong mỗi viên đều có miếng tôm to, tạo cảm giác dai giòn và thơm ngon đặc biệt.',
    ingredients: ['Tôm sú tươi 70%', 'Bột cá', 'Tinh bột nghệ', 'Lòng trắng trứng', 'Dầu tôm', 'Gia vị biển'],
    price: '165.000đ / kg'
  },
  {
    name: 'Beef Ball Special',
    image: '/images/IMG_2911 (1).JPG',
    description: 'Viên bò đặc biệt từ thịt bò Úc nhập khẩu',
    detailedDescription: 'Viên bò special được chế biến từ thịt bò Úc cao cấp, có kết cấu chắc nịch, hương vị đậm đà. Quy trình sản xuất khép kín, đảm bảo chất lượng và an toàn thực phẩm tuyệt đối.',
    ingredients: ['Thịt bò Úc 80%', 'Tinh bột khoai môn', 'Hành tây', 'Tỏi', 'Tiêu đen', 'Nước mắm đặc biệt'],
    price: '185.000đ / kg'
  },
  {
    name: 'Squid Ball Fresh',
    image: '/images/IMG_2920.JPG',
    description: 'Viên mực tươi với độ dai giòn hoàn hảo',
    detailedDescription: 'Viên mực tươi được làm từ mực ống tươi ngon, có độ dai giòn đặc trưng. Hương vị biển đậm đà, rất thích hợp cho các món lẩu hải sản, nướng BBQ hoặc chiên giòn.',
    ingredients: ['Mực ống tươi 75%', 'Bột cá hồi', 'Tinh bột sắn', 'Rong biển', 'Muối biển', 'Gừng tươi'],
    price: '145.000đ / kg'
  },
  {
    name: 'Chicken Ball Tender',
    image: '/images/IMG_2924.JPG',
    description: 'Viên gà mềm mại từ thịt gà ta thuần chủng',
    detailedDescription: 'Viên gà tender được chế biến từ thịt gà ta thuần chủng, thịt mềm ngọt tự nhiên. Kết cấu mịn màng, vị nhẹ nhàng, rất phù hợp cho trẻ em và người cao tuổi.',
    ingredients: ['Thịt gà ta 82%', 'Tinh bột khoai lang', 'Lòng đỏ trứng', 'Hành lá', 'Gừng', 'Gia vị nhẹ'],
    price: '85.000đ / kg'
  },
  {
    name: 'Pork Ball Traditional',
    image: '/images/IMG_2927.JPG',
    description: 'Viên heo truyền thống theo công thức gia truyền',
    detailedDescription: 'Viên heo truyền thống được chế biến theo công thức gia truyền hơn 50 năm. Sử dụng thịt heo sạch, gia vị cân bằng, tạo nên hương vị đậm đà, quen thuộc của người Việt.',
    ingredients: ['Thịt heo sạch 78%', 'Mỡ heo', 'Bột năng', 'Hành khô', 'Tỏi', 'Nước mắm truyền thống'],
    price: '75.000đ / kg'
  },
  {
    name: 'Fish Cake Authentic',
    image: '/images/IMG_2938.JPG',
    description: 'Chả cá thật nguyên chất không chất bảo quản',
    detailedDescription: 'Chả cá authentic được làm hoàn toàn thủ công, từ cá tươi nguyên con. Không sử dụng bất kỳ chất bảo quản nào, giữ nguyên hương vị tự nhiên và giá trị dinh dưỡng của cá.',
    ingredients: ['Cá thiều tươi 90%', 'Tinh bột dong riềng', 'Lá chuối', 'Muối hạt', 'Tiêu trắng', 'Rượu trắng'],
    price: '135.000đ / kg'
  },
  {
    name: 'Premium Mix Package',
    image: '/images/IMG_2949.JPG',
    description: 'Gói combo cao cấp đa dạng hương vị',
    detailedDescription: 'Gói premium mix là sự kết hợp hoàn hảo của tất cả các loại viên cao cấp nhất. Bao gồm viên cua, viên tôm, viên bò, chả cá, tạo nên bữa tiệc lẩu sang trọng và đẳng cấp.',
    ingredients: ['Viên cua deluxe', 'Viên tôm premium', 'Viên bò Úc', 'Chả cá authentic', 'Viên mực tươi', 'Gia vị đặc biệt'],
    price: '220.000đ / kg'
  }
]

export default function OurFoodsSection() {
  const [selectedFoodIndex, setSelectedFoodIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index: number) => {
    setSelectedFoodIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedFoodIndex(null)
  }

  const nextProduct = () => {
    if (selectedFoodIndex !== null) {
      setSelectedFoodIndex((selectedFoodIndex + 1) % foods.length)
    }
  }

  const prevProduct = () => {
    if (selectedFoodIndex !== null) {
      setSelectedFoodIndex(selectedFoodIndex === 0 ? foods.length - 1 : selectedFoodIndex - 1)
    }
  }

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Sản Phẩm Của Chúng Tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá bộ sưu tập đầy đủ các loại hotpot ball premium được chế biến 
            từ nguyên liệu tươi ngon nhất, mang đến trải nghiệm ẩm thực tuyệt vời.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {foods.map((food, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {food.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {food.description}
                </p>
                <button 
                  onClick={() => openModal(index)}
                  className="mt-4 bg-lime-400 hover:bg-lime-500 text-gray-900 font-medium px-4 py-2 rounded-full transition-colors text-sm"
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
              Hãy liên hệ với chúng tôi để được tư vấn và đặt hàng các sản phẩm tươi ngon nhất
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Đặt Hàng Ngay
            </button>
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
  )
}