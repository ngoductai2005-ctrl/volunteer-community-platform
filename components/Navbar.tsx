'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  role?: 'GUEST' | 'VOLUNTEER' | 'ORGANIZER' | 'ADMIN';
  userName?: string;
}

export default function Navbar({
  role = 'GUEST',
  userName = 'Thành viên',
}: NavbarProps) {
  const router = useRouter();

  // Xử lý đăng xuất
  const handleLogout = () => {
    router.push('/');
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link
        href="/"
        className="font-extrabold text-xl text-emerald-600 tracking-tight flex items-center gap-2"
      >
        <span>❤️</span>
        <span>Volunteer Community</span>
      </Link>

      {/* Navigation */}
      <div className="flex gap-6 items-center">
        {/* Trang chủ */}
        <Link
          href="/"
          className="text-slate-700 hover:text-emerald-600 font-medium transition"
        >
          Trang chủ
        </Link>

        {/* Hoạt động */}
        <Link
          href="/activities"
          className="text-slate-700 hover:text-emerald-600 font-medium transition"
        >
          Hoạt động
        </Link>

        {/* ========================= */}
        {/* GUEST */}
        {/* ========================= */}
        {role === 'GUEST' && (
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-slate-700 hover:text-emerald-600 font-medium transition"
            >
              Đăng nhập
            </Link>

            <Link
              href="/register"
              className="bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-emerald-700 shadow-sm transition"
            >
              Đăng ký
            </Link>
          </div>
        )}

        {/* ========================= */}
        {/* USER ĐÃ ĐĂNG NHẬP */}
        {/* ========================= */}
        {role !== 'GUEST' && (
          <div className="flex items-center gap-4 border-l pl-4 border-slate-200">
            {/* User information */}
            <div className="flex items-center gap-2">
              {/* Avatar */}
              <div className="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm shadow-inner">
                {userName.charAt(0).toUpperCase()}
              </div>

              {/* Name + Role */}
              <div className="hidden sm:block text-left">
                <p className="text-xs font-semibold text-slate-800">
                  {userName}
                </p>

                <span className="text-[10px] bg-emerald-50 text-emerald-600 font-bold px-1.5 py-0.5 rounded uppercase">
                  {role}
                </span>
              </div>
            </div>

            {/* ========================= */}
            {/* VOLUNTEER */}
            {/* ========================= */}
            {role === 'VOLUNTEER' && (
              <Link
                href="/profile"
                className="text-slate-700 hover:text-emerald-600 font-medium transition text-sm"
              >
                Hồ sơ
              </Link>
            )}

            {/* ========================= */}
            {/* ORGANIZER */}
            {/* ========================= */}
            {role === 'ORGANIZER' && (
              <>
                <Link
                  href="/dashboard"
                  className="text-slate-700 hover:text-emerald-600 font-medium transition text-sm"
                >
                  Dashboard
                </Link>

                <Link
                  href="/profile"
                  className="text-slate-700 hover:text-emerald-600 font-medium transition text-sm"
                >
                  Hồ sơ
                </Link>
              </>
            )}

            {/* ========================= */}
            {/* ADMIN */}
            {/* ========================= */}
            {role === 'ADMIN' && (
              <>
                <Link
                  href="/admin"
                  className="text-slate-700 hover:text-emerald-600 font-medium transition text-sm"
                >
                  Admin
                </Link>

                <Link
                  href="/profile"
                  className="text-slate-700 hover:text-emerald-600 font-medium transition text-sm"
                >
                  Hồ sơ
                </Link>
              </>
            )}

            {/* ========================= */}
            {/* ĐĂNG XUẤT */}
            {/* ========================= */}
            <button
              type="button"
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600 font-medium cursor-pointer text-sm transition"
            >
              Đăng xuất
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}