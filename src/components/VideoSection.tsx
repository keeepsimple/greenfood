"use client";

import { useState } from "react";

const videos = [
  {
    id: "noIKNgQ9jZ0",
    title: "Cách chế biến viên thả lẩu ngon",
    description:
      "Khám phá cách chế biến viên thả lẩu tuyệt ngon với kỹ thuật chuyên nghiệp",
    thumbnail: "https://img.youtube.com/vi/noIKNgQ9jZ0/maxresdefault.jpg",
  },
  {
    id: "mKq4JOfz6tk",
    title: "Bí quyết làm viên thả lẩu đậm đà",
    description:
      "Học cách nấu mì udon và viên thả lẩu với hương vị đậm đà, hấp dẫn với nước dùng đặc biệt",
    thumbnail: "https://img.youtube.com/vi/mKq4JOfz6tk/maxresdefault.jpg",
  },
];

export default function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Video Hướng Dẫn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Xem cách chế biến và sử dụng sản phẩm hotpot ball của chúng tôi để
            có những bữa ăn ngon và đầy dinh dưỡng
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((video, index) => (
            <div key={video.id} className="group">
              <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                {playingVideo === video.id ? (
                  <div
                    className="relative w-full"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => handlePlayVideo(video.id)}
                  >
                    <div
                      className="relative w-full"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                        <div className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transform transition-all duration-300 group-hover:scale-110 shadow-2xl">
                          <svg
                            className="w-12 h-12 text-gray-900 ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm font-medium">
                        Shorts
                      </div>
                    </div>
                  </div>
                )}

                {/* Video info */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {video.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-400 text-sm font-medium">
                        YouTube Shorts
                      </span>
                    </div>

                    {playingVideo !== video.id && (
                      <button
                        onClick={() => handlePlayVideo(video.id)}
                        className="bg-brand-800 hover:bg-brand-700 text-white font-medium px-4 py-2 rounded-full transition-colors text-sm"
                      >
                        Xem Video
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
