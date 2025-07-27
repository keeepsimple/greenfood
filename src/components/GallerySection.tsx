import Image from 'next/image'

const categories = [
  {
    id: 'vegetable',
    title: 'VEGETABLE',
    image: '/images/IMG_2920.JPG',
    description: 'Rau củ quả tươi ngon'
  },
  {
    id: 'fruit',
    title: 'FRUIT',
    image: '/images/IMG_2924.JPG',
    description: 'Trái cây tươi mới'
  },
  {
    id: 'hotpot',
    title: 'HOTPOT BALL',
    image: '/images/IMG_2927.JPG',
    description: 'Viên hotpot đặc biệt'
  },
  {
    id: 'dried',
    title: 'DRIED',
    image: '/images/IMG_2938.JPG',
    description: 'Thực phẩm sấy khô'
  }
]

export default function GallerySection() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="category-card h-80"
          >
            <div className="relative w-full h-full">
              <Image
                src={category.image}
                alt={category.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-light mb-2 tracking-wider">
                  {category.title}
                </h3>
                <p className="text-sm opacity-90 text-center">
                  {category.description}
                </p>
                <button className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-full text-sm hover:bg-white/30">
                  Khám Phá
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}