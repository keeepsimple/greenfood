"use client";

import Header from "@/components/Header";

const reviews = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    location: "Hà Nội",
    rating: 5,
    date: "2024-01-15",
    review:
      "Viên hotpot ball cua que thật sự rất ngon! Vị cua tươi ngọt tự nhiên, kết cấu dai giòn vừa phải. Gia đình tôi rất thích và sẽ đặt hàng thường xuyên.",
    product: "Viên Hotpot Ball Cua Que",
  },
  {
    id: 2,
    name: "Trần Văn Hùng",
    location: "TP. Hồ Chí Minh",
    rating: 5,
    date: "2024-01-12",
    review:
      "Chất lượng sản phẩm xuất sắc! Viên cá cao cấp thực sự không có mùi tanh, thịt cá tươi ngon. Đóng gói cẩn thận, giao hàng nhanh chóng.",
    product: "Viên Cá Cao Cấp",
  },
  {
    id: 3,
    name: "Lê Thị Hương",
    location: "Đà Nẵng",
    rating: 5,
    date: "2024-01-10",
    review:
      "Bộ combo hotpot đa dạng rất tiện lợi cho gia đình. Nhiều loại viên khác nhau, mỗi loại đều có hương vị riêng biệt. Giá cả hợp lý.",
    product: "Bộ Combo Hotpot Đa Dạng",
  },
  {
    id: 4,
    name: "Phạm Minh Đức",
    location: "Cần Thơ",
    rating: 5,
    date: "2024-01-08",
    review:
      "Viên tôm siêu cấp thật sự đúng tên gọi! Trong mỗi viên đều có miếng tôm to, tươi ngon. Ăn lẩu với viên tôm này thật tuyệt vời.",
    product: "Viên Tôm Siêu Cấp",
  },
  {
    id: 5,
    name: "Hoàng Thị Lan",
    location: "Hải Phòng",
    rating: 5,
    date: "2024-01-05",
    review:
      "Viên bò đặc biệt có hương vị đậm đà, thịt bò Úc thật sự chất lượng cao. Kết cấu chắc nịch, rất thích hợp cho món lẩu gia đình.",
    product: "Viên Bò Đặc Biệt",
  },
  {
    id: 6,
    name: "Vũ Văn Thành",
    location: "Nha Trang",
    rating: 5,
    date: "2024-01-03",
    review:
      "Viên mực tươi có độ dai giòn đặc trưng, hương vị biển đậm đà. Rất phù hợp cho các món nướng BBQ. Sẽ ủng hộ shop lâu dài.",
    product: "Viên Mực Tươi",
  },
  {
    id: 7,
    name: "Đinh Thị Thu",
    location: "Huế",
    rating: 5,
    date: "2023-12-28",
    review:
      "Viên gà mềm mại rất phù hợp cho con nhỏ. Thịt gà ta thuần chủng, vị nhẹ nhàng không bị khô. Bé nhà tôi rất thích ăn.",
    product: "Viên Gà Mềm Mại",
  },
  {
    id: 8,
    name: "Bùi Văn Nam",
    location: "Vũng Tàu",
    rating: 5,
    date: "2023-12-25",
    review:
      "Viên heo truyền thống có hương vị quen thuộc, gợi nhớ về món ăn tuổi thơ. Gia vị cân bằng, không quá mặn. Đóng gói sạch sẽ.",
    product: "Viên Heo Truyền Thống",
  },
  {
    id: 9,
    name: "Ngô Thị Xuân",
    location: "Quy Nhơn",
    rating: 5,
    date: "2023-12-22",
    review:
      "Chả cá nguyên chất thực sự không có chất bảo quản, ăn rất an tâm. Hương vị tự nhiên của cá, làm thủ công nên rất thơm ngon.",
    product: "Chả Cá Nguyên Chất",
  },
  {
    id: 10,
    name: "Lý Văn Phong",
    location: "Biên Hòa",
    rating: 5,
    date: "2023-12-20",
    review:
      "Gói combo cao cấp xứng đáng với giá tiền. Tất cả các loại viên đều chất lượng cao, tạo nên bữa tiệc lẩu sang trọng cho gia đình.",
    product: "Gói Combo Cao Cấp",
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
            Khám phá những đánh giá chân thực từ khách hàng đã trải nghiệm sản
            phẩm hotpot ball cao cấp của chúng tôi
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
                <span className="inline-block bg-lime-100 text-lime-800 text-xs px-2 py-1 rounded-full">
                  {review.product}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">"{review.review}"</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-lime-400 to-green-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Chia Sẻ Trải Nghiệm Của Bạn
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Hãy để lại đánh giá của bạn để giúp những khách hàng khác có lựa
              chọn tốt nhất
            </p>
            <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Viết Đánh Giá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
