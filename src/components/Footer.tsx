export default function Footer() {
  return (
    <footer className="bg-brand-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">Surimi Tama</h3>
            <div className="space-y-2">
              <p className="text-brand-100">
                <span className="font-medium">Địa chỉ:</span>
              </p>
              <p className="text-brand-100">
                Kim Mã,
                <br />
                Quận Ba Đình, TP. Hà Nội, Việt Nam
              </p>
              <p className="text-brand-100">
                <span className="font-medium">Điện thoại:</span> 0123 456 789
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h4>
            <div className="inline-flex flex-wrap gap-3 justify-center md:justify-end">
              <a
                href="https://www.facebook.com/profile.php?id=61577243606780"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>

              <a
                href="https://www.tiktok.com/@surimitama.dn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 px-4 py-2 rounded-lg transition-colors"
                aria-label="Follow on TikTok"
              >
                {/* TikTok Icon */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M41.5 16.2c-4.1-.9-7.5-3.5-9.4-7.1V35c0 6.5-5.3 11.8-11.8 11.8S8.5 41.5 8.5 35S13.8 23.2 20.3 23.2c1 0 2 .1 2.9.4v7.3c-.9-.4-1.9-.6-2.9-.6c-3.6 0-6.5 2.9-6.5 6.5S16.7 43.3 20.3 43.3S26.8 40.4 26.8 36.8V2h6.4c1.8 4.6 6 8 11 8.8v5.4h-2.7z" />
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-700 mt-8 pt-4 text-center text-brand-100/80">
          <p>&copy; 2025 Surimi Tama. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
