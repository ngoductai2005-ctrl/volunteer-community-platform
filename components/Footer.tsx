import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Cột 1: Giới thiệu */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-wide">Volunteer Community</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Nền tảng kết nối những tấm lòng nhân ái, lan tỏa yêu thương và tổ chức các hoạt động tình nguyện vì một cộng đồng phát triển bền vững.
          </p>
        </div>

        {/* Cột 2: Đường dẫn nhanh */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-white tracking-wide uppercase">Khám phá</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition">Trang chủ</Link>
            </li>
            <li>
              <Link href="/activities" className="hover:text-emerald-400 transition">Danh sách hoạt động</Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-emerald-400 transition">Đăng ký tài khoản</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-emerald-400 transition">Đăng nhập hệ thống</Link>
            </li>
          </ul>
        </div>

        {/* Cột 3: Liên hệ */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-white tracking-wide uppercase">Liên hệ hỗ trợ</h4>
          <div className="space-y-2 text-sm text-slate-400">
            <p>📍 Địa chỉ: Vĩnh Long, Việt Nam</p>
            <p>📧 Email: support@volunteercommunity.vn</p>
            <p>📞 Hotline: 0912 345 678</p>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền phía dưới */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© 2026 Volunteer Community Platform. Lan tỏa yêu thương mọi lúc mọi nơi.</p>
      </div>
    </footer>
  );
}