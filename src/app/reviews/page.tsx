"use client";

import Header from "@/components/Header";

const reviews = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    location: "Hà Nội",
    rating: 5,
    date: "2025-07-28",
    review:
      "Thanh Surimi Hương Vị Cua thơm mùi cua, ăn dai giòn rất vui miệng. Chấm chút nước mắm tỏi ớt là hết veo cả gói.",
    product: "Thanh Surimi Hương Vị Cua",
  },
  {
    id: 2,
    name: "Trần Văn Hùng",
    location: "TP. Hồ Chí Minh",
    rating: 4,
    date: "2025-07-15",
    review:
      "Viên Cá HIRECO thịt cá chắc, không bị bở và không tanh. Hơi đậm vị một chút nhưng ăn cùng rau và bún là vừa.",
    product: "Viên Cá HIRECO",
  },
  {
    id: 3,
    name: "Lê Thị Hương",
    location: "Đà Nẵng",
    rating: 5,
    date: "2025-06-30",
    review:
      "Viên Mực GESO có miếng mực nhỏ bên trong nên cắn rất vui, độ dai giòn tự nhiên, bé nhà mình mê lắm.",
    product: "Viên Mực GESO",
  },
  {
    id: 4,
    name: "Phạm Minh Đức",
    location: "Cần Thơ",
    rating: 5,
    date: "2025-06-10",
    review:
      "Tôm Viên ngọt thịt, nấu lẩu hay chiên đều ngon. Đóng gói gọn gàng, giao nhanh, ăn rất tiện.",
    product: "Tôm Viên",
  },
  {
    id: 5,
    name: "Hoàng Thị Lan",
    location: "Hải Phòng",
    rating: 4,
    date: "2025-05-25",
    review:
      "Tempura Xiên Que ăn nhâm nhi rất vui, lớp ngoài có độ thơm nhẹ. Chiên lên hơi hút dầu nếu để lửa nhỏ, để lớn hơn là ổn.",
    product: "Tempura Xiên Que",
  },
  {
    id: 6,
    name: "Vũ Văn Thành",
    location: "Nha Trang",
    rating: 4,
    date: "2025-05-05",
    review:
      "Đậu Hũ Surimi mềm mịn, thơm nhẹ mùi đậu nành, hợp cho trẻ nhỏ. Ăn với nước dùng thanh là trọn vị.",
    product: "Đậu Hũ Surimi",
  },
  {
    id: 7,
    name: "Đinh Thị Thu",
    location: "Huế",
    rating: 5,
    date: "2025-04-20",
    review:
      "Viên Cá HIRECO ăn rất chắc thịt, cảm giác nhiều cá thật. Rất hợp làm topping cho bún và mì.",
    product: "Viên Cá HIRECO",
  },
  {
    id: 8,
    name: "Bùi Văn Nam",
    location: "Vũng Tàu",
    rating: 4,
    date: "2025-03-18",
    review:
      "Thanh Surimi Hương Vị Cua vị cua rõ ràng, hơi ngọt hậu. Nướng ăn kèm sốt mayonnaise là hết sạch.",
    product: "Thanh Surimi Hương Vị Cua",
  },
  {
    id: 9,
    name: "Ngô Thị Xuân",
    location: "Quy Nhơn",
    rating: 5,
    date: "2025-02-14",
    review:
      "Viên Mực GESO cắn trúng miếng mực giòn sật rất thích. Cả nhà khen ngon, sẽ đặt lại.",
    product: "Viên Mực GESO",
  },
  {
    id: 10,
    name: "Lý Văn Phong",
    location: "Biên Hòa",
    rating: 5,
    date: "2025-01-22",
    review:
      "Tôm Viên ngọt và thơm, không hề bở. Cho vào nồi lẩu tầm 3–4 phút là vừa chín tới, ăn rất đã.",
    product: "Tôm Viên",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
    </div>
  );
};

export default function ReviewsPage() {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(
    (rating) => reviews.filter((review) => review.rating === rating).length
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Đánh Giá Khách Hàng
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lắng nghe chia sẻ thật từ khách hàng đã thưởng thức Surimi Tama.
          </p>
        </div>

        {/* Review Statistics */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <span className="text-5xl font-bold text-gray-900 mr-4">
                  {averageRating.toFixed(1)}
                </span>
                <div>
                  <StarRating rating={Math.round(averageRating)} />
                  <p className="text-gray-600 mt-1">{totalReviews} đánh giá</p>
                </div>
              </div>
              <p className="text-gray-600">
                Điểm đánh giá trung bình từ khách hàng đã mua sản phẩm
              </p>
            </div>

            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div key={rating} className="flex items-center">
                  <span className="text-sm text-gray-600 w-8">{rating} ⭐</span>
                  <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{
                        width: `${(ratingCounts[index] / totalReviews) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-8">
                    {ratingCounts[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.location}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>

              <div className="mb-4">
                <span className="inline-block bg-brand-800/10 text-brand-800 text-xs px-2 py-1 rounded-full">
                  {review.product}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">"{review.review}"</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-brand-800 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Chia Sẻ Trải Nghiệm Của Bạn
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Hãy để lại đánh giá của bạn để giúp những khách hàng khác có lựa
              chọn tốt nhất
            </p>
            <button className="bg-white text-brand-800 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Viết Đánh Giá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
