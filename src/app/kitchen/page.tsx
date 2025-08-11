import Header from "@/components/Header";
import Script from "next/script";

export default function KitchenPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero banner following homepage theme */}
        <div className="bg-brand-800 rounded-3xl p-8 lg:p-12 text-white mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Vào Bếp Cùng Surimi Tama
          </h1>
          <p className="text-white/90 text-lg mb-6 leading-relaxed">
            Gợi ý món ngon nhanh gọn, đủ chất cho ngày bận rộn. Cùng khám phá
            các công thức phối hợp Surimi Tama thật dễ.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="#tap-3"
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition text-sm"
            >
              Tập 3
            </a>
            <a
              href="#tap-2"
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition text-sm"
            >
              Tập 2
            </a>
            <a
              href="#tap-1"
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition text-sm"
            >
              Tập 1
            </a>
          </div>
        </div>

        {/* Embeds in engaging cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Episode 3 */}
          <div
            id="tap-3"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Tập 3: Xiên Surimi sốt tê cay
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Món ăn vặt nhanh gọn, đủ dinh dưỡng cho ngày bận rộn.
            </p>
            <div className="flex justify-center">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@surimitama.dn/video/7534703704734289160"
                data-video-id="7534703704734289160"
                style={{ maxWidth: 605, minWidth: 325 }}
              >
                <section>
                  <a
                    target="_blank"
                    title="@surimitama.dn"
                    href="https://www.tiktok.com/@surimitama.dn?refer=embed"
                  >
                    @surimitama.dn
                  </a>{" "}
                  📌Tập 3: Xiên Surimi sốt tê cay- Món ăn vặt siêu cuốn, nhanh
                  gọn mà vẫn bổ sung đầy đủ chất dinh dưỡng. 👉Theo dõi các tập
                  tiếp theo của “Món ngon cùng Surimi Tama” để cập nhật thêm
                  nhiều công thức nấu ăn cho cuộc sống bận rộn mà vẫn đủ vị mỗi
                  ngày!{" "}
                  <a
                    title="buaantienloi"
                    target="_blank"
                    href="https://www.tiktok.com/tag/buaantienloi?refer=embed"
                  >
                    #Buaantienloi
                  </a>{" "}
                  <a
                    title="surimitama"
                    target="_blank"
                    href="https://www.tiktok.com/tag/surimitama?refer=embed"
                  >
                    #SurimiTama
                  </a>{" "}
                  <a
                    title="anlanhsongkhoe"
                    target="_blank"
                    href="https://www.tiktok.com/tag/anlanhsongkhoe?refer=embed"
                  >
                    #AnLanhSongKhoe
                  </a>{" "}
                  <a
                    title="chatluong"
                    target="_blank"
                    href="https://www.tiktok.com/tag/chatluong?refer=embed"
                  >
                    #ChatLuong
                  </a>{" "}
                  <a
                    title="chuanvinhat"
                    target="_blank"
                    href="https://www.tiktok.com/tag/chuanvinhat?refer=embed"
                  >
                    #ChuanViNhat
                  </a>{" "}
                  <a
                    target="_blank"
                    title="♬ nhạc nền  - surimitama.dn"
                    href="https://www.tiktok.com/music/nhạc-nền-surimitamadn-7534703738611600144?refer=embed"
                  >
                    ♬ nhạc nền - surimitama.dn
                  </a>
                </section>
              </blockquote>
            </div>
          </div>

          {/* Episode 2 */}
          <div
            id="tap-2"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Tập 2: Mỳ Udon viên mực
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              “Món liền” mà vẫn đủ chất, hợp cho bữa trưa gọn nhẹ.
            </p>
            <div className="flex justify-center">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@surimitama.dn/video/7529804188310572296"
                data-video-id="7529804188310572296"
                style={{ maxWidth: 605, minWidth: 325 }}
              >
                <section>
                  <a
                    target="_blank"
                    title="@surimitama.dn"
                    href="https://www.tiktok.com/@surimitama.dn?refer=embed"
                  >
                    @surimitama.dn
                  </a>{" "}
                  📌𝗧𝗮̣̂𝗽 2: Mỳ Udon viên mực- Món ăn " liền" nhưng vẫn đầy đủ
                  dinh dưỡng 👉Theo dõi các tập tiếp theo của “Món ngon cùng
                  Surimi Tama” để cập nhật thêm nhiều công thức nấu ăn cho cuộc
                  sống bận rộn mà vẫn đủ vị mỗi ngày!{" "}
                  <a
                    title="buaantienloi"
                    target="_blank"
                    href="https://www.tiktok.com/tag/buaantienloi?refer=embed"
                  >
                    #Buaantienloi
                  </a>{" "}
                  <a
                    title="surimitama"
                    target="_blank"
                    href="https://www.tiktok.com/tag/surimitama?refer=embed"
                  >
                    #SurimiTama
                  </a>{" "}
                  <a
                    title="anlanhsongkhoe"
                    target="_blank"
                    href="https://www.tiktok.com/tag/anlanhsongkhoe?refer=embed"
                  >
                    #AnLanhSongKhoe
                  </a>{" "}
                  <a
                    title="chatluong"
                    target="_blank"
                    href="https://www.tiktok.com/tag/chatluong?refer=embed"
                  >
                    #ChatLuong
                  </a>{" "}
                  <a
                    title="chuanvinhat"
                    target="_blank"
                    href="https://www.tiktok.com/tag/chuanvinhat?refer=embed"
                  >
                    #ChuanViNhat
                  </a>
                  <a
                    title="cooking"
                    target="_blank"
                    href="https://www.tiktok.com/tag/cooking?refer=embed"
                  >
                    #cooking
                  </a>{" "}
                  <a
                    target="_blank"
                    title="♬ nhạc nền  - surimitama.dn"
                    href="https://www.tiktok.com/music/nhạc-nền-surimitamadn-7529804217679792913?refer=embed"
                  >
                    ♬ nhạc nền - surimitama.dn
                  </a>
                </section>
              </blockquote>
            </div>
          </div>

          {/* Episode 1 */}
          <div
            id="tap-1"
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow md:col-span-2"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Tập 1: Salad thanh cua healthy
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Khai vị nhẹ nhàng, thanh mát – chuẩn healthy.
            </p>
            <div className="flex justify-center">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@surimitama.dn/video/7526973312099044626"
                data-video-id="7526973312099044626"
                style={{ maxWidth: 605, minWidth: 325 }}
              >
                <section>
                  <a
                    target="_blank"
                    title="@surimitama.dn"
                    href="https://www.tiktok.com/@surimitama.dn?refer=embed"
                  >
                    @surimitama.dn
                  </a>{" "}
                  🥢 SURIMI TAMA HÂN HẠNH GIỚI THIỆU SERI: "MÓN NGON CÙNG SURIMI
                  TAMA" 📌𝗧𝗮̣̂𝗽 𝟭: 𝗦𝗮𝗹𝗮𝗱 𝘁𝗵𝗮𝗻𝗵 𝗰𝘂𝗮 – 𝗠𝗼́𝗻 𝗸𝗵𝗮𝗶 𝘃𝗶̣ 𝗻𝗵𝗲̣ 𝗻𝗵𝗮̀𝗻𝗴, 𝗰𝗵𝘂𝗮̂̉𝗻
                  𝗵𝗲𝗮𝗹𝘁𝗵𝘆 👉Theo dõi các tập tiếp theo của “Món ngon cùng Surimi
                  Tama” để cập nhật thêm nhiều công thức nấu ăn cho cuộc sống
                  bận rộn mà vẫn đủ vị mỗi ngày!{" "}
                  <a
                    title="buaantienloi"
                    target="_blank"
                    href="https://www.tiktok.com/tag/buaantienloi?refer=embed"
                  >
                    #Buaantienloi
                  </a>{" "}
                  <a
                    title="surimitama"
                    target="_blank"
                    href="https://www.tiktok.com/tag/surimitama?refer=embed"
                  >
                    #SurimiTama
                  </a>{" "}
                  <a
                    title="anlanhsongkhoe"
                    target="_blank"
                    href="https://www.tiktok.com/tag/anlanhsongkhoe?refer=embed"
                  >
                    #AnLanhSongKhoe
                  </a>{" "}
                  <a
                    title="chatluong"
                    target="_blank"
                    href="https://www.tiktok.com/tag/chatluong?refer=embed"
                  >
                    #ChatLuong
                  </a>{" "}
                  <a
                    title="chuanvinhat"
                    target="_blank"
                    href="https://www.tiktok.com/tag/chuanvinhat?refer=embed"
                  >
                    #ChuanViNhat
                  </a>{" "}
                  <a
                    title="monanngon"
                    target="_blank"
                    href="https://www.tiktok.com/tag/monanngon?refer=embed"
                  >
                    #monanngon
                  </a>{" "}
                  <a
                    target="_blank"
                    title="♬ Good Food - Noctum47"
                    href="https://www.tiktok.com/music/Good-Food-7423860401056401424?refer=embed"
                  >
                    ♬ Good Food - Noctum47
                  </a>
                </section>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Load TikTok embed script once */}
        <Script
          src="https://www.tiktok.com/embed.js"
          strategy="afterInteractive"
        />

        {/* Closing CTA */}
        <div className="mt-12 bg-brand-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">
            Thử ngay nguyên liệu Surimi Tama
          </h3>
          <p className="text-white/90 mb-6">
            Chọn sản phẩm yêu thích và vào bếp cùng chúng tôi.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="/our-foods"
              className="inline-block bg-white text-brand-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Xem Sản Phẩm
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577243606780"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/80 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Đặt Hàng Ngay
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
