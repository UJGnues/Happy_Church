// HeaderMobile.tsx

"use client";

import Link from "next/link";
import { Menu, X, User, UserPlus, ChevronDown } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { navItems } from "../data/navItems";

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <header className="bg-white shadow-sm relative z-50 lg:hidden">
        <div className="flex items-center h-16 px-4">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="메뉴 열기"
          >
            <Menu className="w-7 h-7 text-gray-700" />
          </button>
          {/* Logo */}
          <div className="flex-1 flex justify-center items-center">
            <Link
              href="/"
              className="flex items-center"
              aria-label="행복한교회 홈페이지"
            >
              <Logo size={150} />
            </Link>
          </div>
          {/* Login / Join */}
          <div className="flex items-center space-x-2">
            <Link
              href="/login"
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="로그인"
            >
              <User className="w-6 h-6 text-gray-700" />
            </Link>
            <Link
              href="/join"
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="회원가입"
            >
              <UserPlus className="w-6 h-6 text-gray-700" />
            </Link>
          </div>
        </div>
        {/* 햄버거 메뉴 오버레이 */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 flex">
            <div className="bg-white w-72 h-full p-4 overflow-y-auto">
              {/* 상단: 로그인/회원가입 버튼 */}
              <div className="flex gap-2 mb-6">
                <Link
                  href="/login"
                  className="flex-1 py-2 bg-gray-100 text-center rounded font-semibold text-gray-700 hover:bg-blue-50"
                  onClick={() => setMenuOpen(false)}
                >
                  로그인
                </Link>
                <Link
                  href="/join"
                  className="flex-1 py-2 bg-blue-100 text-center rounded font-semibold text-blue-700 hover:bg-blue-200"
                  onClick={() => setMenuOpen(false)}
                >
                  회원가입
                </Link>
              </div>
              {/* 메뉴 목록 */}
              <nav>
                {navItems.map((item, idx) =>
                  "href" in item ? (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block py-3 px-2 text-primary font-medium hover:bg-gray-50 rounded"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div key={item.title} className="mb-2">
                      <button
                        className="w-full flex items-center justify-between py-3 px-2 text-primary font-medium hover:bg-gray-50 rounded"
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        aria-expanded={openIndex === idx}
                      >
                        <span>{item.title}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openIndex === idx ? "rotate-180" : ""}`} />
                      </button>
                      {openIndex === idx && (
                        <div className="pl-5 py-2 space-y-1">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="block py-2 text-gray-700 hover:text-blue-600 transition-all"
                              onClick={() => setMenuOpen(false)}
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}
              </nav>
              {/* 메뉴 닫기 버튼 */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 p-1"
                aria-label="메뉴 닫기"
              >
                <X className="w-7 h-7 text-gray-700" />
              </button>
            </div>
            {/* 오버레이 바깥 클릭시 닫힘 */}
            <div className="flex-1" onClick={() => setMenuOpen(false)} />
          </div>
        )}
      </header>
    </>
  );
};

export default HeaderMobile;
