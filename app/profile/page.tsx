import { db } from '@/lib/prisma';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default async function ProfilePage() {
  /*
   * Tạm thời lấy user đầu tiên trong database.
   *
   * SAU KHI HOÀN THIỆN SESSION:
   * thay findFirst() bằng userId lấy từ session.
   */
  const user = await db.user.findFirst({
    orderBy: {
      createdAt: 'asc',
    },
  });

  // Nếu database chưa có user
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar role="GUEST" />

        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10 text-center max-w-md w-full">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 flex items-center justify-center text-3xl mb-5">
              👤
            </div>

            <h1 className="text-2xl font-bold text-slate-800">
              Chưa có thông tin tài khoản
            </h1>

            <p className="text-slate-500 mt-3">
              Vui lòng đăng ký tài khoản để sử dụng trang hồ sơ cá nhân.
            </p>

            <Link
              href="/register"
              className="inline-block mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Đăng ký tài khoản
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // Chữ cái đầu của tên để làm avatar
  const avatarLetter = user.name.charAt(0).toUpperCase();

  // Hiển thị tên role đẹp hơn
  const roleName = {
    VOLUNTEER: 'Tình nguyện viên',
    ORGANIZER: 'Ban tổ chức',
    ADMIN: 'Quản trị viên',
  }[user.role];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar */}
      <Navbar
        role={user.role}
        userName={user.name}
      />

      {/* Main */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/"
              className="text-sm text-slate-500 hover:text-emerald-600 transition"
            >
              Trang chủ
            </Link>

            <span className="mx-2 text-slate-300">/</span>

            <span className="text-sm text-slate-800 font-medium">
              Hồ sơ cá nhân
            </span>
          </div>

          {/* Profile Header */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Cover */}
            <div className="h-36 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800 relative">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            {/* User info */}
            <div className="px-6 md:px-10 pb-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
                <div className="flex items-end gap-5 -mt-12 relative">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
                    <div className="w-full h-full rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl font-extrabold">
                      {avatarLetter}
                    </div>
                  </div>

                  <div className="pb-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {user.name}
                    </h1>

                    <p className="text-sm text-slate-500 mt-1">
                      Thành viên Volunteer Community
                    </p>
                  </div>
                </div>

                {/* Role */}
                <div className="pb-1">
                  <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {roleName}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Thông tin cá nhân */}
            <section className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Thông tin cá nhân
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Thông tin tài khoản của bạn
                  </p>
                </div>

                <span className="text-2xl">👤</span>
              </div>

              <div className="space-y-6">
                {/* Họ tên */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    👤
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Họ và tên
                    </p>

                    <p className="text-base font-semibold text-slate-800 mt-1">
                      {user.name}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    ✉️
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Email
                    </p>

                    {/* EMAIL LẤY TRỰC TIẾP TỪ DATABASE */}
                    <p className="text-base font-semibold text-slate-800 mt-1 break-all">
                      {user.email}
                    </p>
                  </div>
                </div>

                {/* Vai trò */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    🛡️
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Vai trò hệ thống
                    </p>

                    <div className="mt-1">
                      <span className="inline-flex bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-semibold">
                        {roleName}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ngày tạo */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    📅
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Ngày tham gia
                    </p>

                    <p className="text-base font-semibold text-slate-800 mt-1">
                      {new Intl.DateTimeFormat('vi-VN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      }).format(user.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quyền tài khoản */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900">
                Quyền tài khoản
              </h2>

              <p className="text-sm text-slate-500 mt-1 mb-5">
                Các chức năng bạn có thể sử dụng
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-sm text-slate-700">
                    Xem hoạt động tình nguyện
                  </span>
                </div>

                {user.role === 'VOLUNTEER' && (
                  <>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-sm text-slate-700">
                        Đăng ký hoạt động
                      </span>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-sm text-slate-700">
                        Theo dõi lịch sử tham gia
                      </span>
                    </div>
                  </>
                )}

                {user.role === 'ORGANIZER' && (
                  <>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-sm text-slate-700">
                        Tạo hoạt động
                      </span>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-sm text-slate-700">
                        Quản lý người tham gia
                      </span>
                    </div>
                  </>
                )}

                {user.role === 'ADMIN' && (
                  <>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-sm text-slate-700">
                        Quản lý hệ thống
                      </span>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-sm text-slate-700">
                        Quản lý người dùng
                      </span>
                    </div>
                  </>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}