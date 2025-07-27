export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">GreenFood</h3>
            <div className="space-y-2">
              <p className="text-green-100">
                <span className="font-medium">Địa chỉ:</span>
              </p>
              <p className="text-green-100">
                Lạc Long Quân, Phường Xuân La
                <br />
                Quận Tây Hồ, TP. Hà Nội, Việt Nam
              </p>
              <p className="text-green-100">
                <span className="font-medium">Điện thoại:</span> 0123 456 789
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h4>
            <a
              href="https://www.facebook.com/greenfood"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-4 text-center text-green-200">
          <p>&copy; 2024 GreenFood. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
