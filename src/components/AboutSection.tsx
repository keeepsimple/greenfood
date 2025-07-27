import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max-width">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-green-600 tracking-wider uppercase mb-4">
            Chào mừng bạn đến với
          </div>
          <h2 className="heading-secondary">
            WELCOME TO ORGANIVE
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">FAMILY HEALTHY</h3>
            <p className="text-gray-600 text-sm">
              Sản phẩm organic tốt cho sức khỏe toàn gia đình với nguyên liệu tự nhiên
            </p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">ALWAYS FRESH</h3>
            <p className="text-gray-600 text-sm">
              Cam kết luôn tươi ngon với quy trình bảo quản và vận chuyển chuyên nghiệp
            </p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">100% ORGANIC</h3>
            <p className="text-gray-600 text-sm">
              Hoàn toàn tự nhiên không chất bảo quản, an toàn cho sức khỏe
            </p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">FOOD SAFETY</h3>
            <p className="text-gray-600 text-sm">
              Đảm bảo an toàn thực phẩm với chứng nhận chất lượng quốc tế
            </p>
          </div>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden">
          <div className="relative h-96">
            <Image
              src="/images/IMG_2911 (1).JPG"
              alt="Fresh organic hotpot ingredients"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container-max-width text-white">
                <h3 className="text-4xl font-light mb-4">Nguyên Liệu Tươi Ngon</h3>
                <p className="text-xl font-light max-w-2xl">
                  Chúng tôi chọn lọc những nguyên liệu tươi nhất từ các trang trại organic uy tín, 
                  đảm bảo chất lượng cao nhất cho sản phẩm Hotpot Ball của bạn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}