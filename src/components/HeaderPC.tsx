"use client";

import Link from "next/link";
import { Search, User, UserPlus, ChevronDown } from "lucide-react";
import { useState, memo } from "react";
import Logo from "./Logo";
import { navItems } from "../data/navItems";

const HeaderPC = memo(() => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* 로고 (크게, 텍스트 없음) */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="행복한교회 홈페이지"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            style={{ minWidth: 160 }}
          >
            <Logo size={200} />
          </Link>

          {/* 네비게이션 */}
          <nav className="flex items-center space-x-1" aria-label="주 메뉴">
            {navItems.map((item, index) =>
              "href" in item ? (
                <Link
                  key={item.title}
                  href={item.href}
                  className="relative flex items-center space-x-1 text-primary hover:text-blue transition-colors py-5 px-4 font-medium nav-underline group"
                >
                  {item.title}
                </Link>
              ) : (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="relative flex items-center space-x-1 text-primary hover:text-blue transition-colors py-5 px-4 font-medium nav-underline group"
                    aria-expanded={activeDropdown === index}
                    aria-haspopup="true"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {/* 드롭다운 */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 z-50
                      ${
                        activeDropdown === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }
                    `}
                    role="menu"
                    aria-hidden={activeDropdown !== index}
                  >
                    <div className="relative">
                      <div className="absolute -top-2 left-8 w-4 h-4 bg-white rotate-45 shadow-sm" aria-hidden="true" />
                      <div className="bg-white shadow-xl rounded-lg overflow-hidden min-w-[180px] grid grid-cols-1 gap-0 p-4">
                        {item.submenu.map((sub, idx) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className="block py-2 text-gray-600 hover:text-blue hover:pl-2 transition-all duration-200"
                            role="menuitem"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </nav>

          {/* 오른쪽 아이콘 */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="검색"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <Link
              href="/login"
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="로그인"
            >
              <User className="w-5 h-5 text-gray-600" />
            </Link>
            <Link
              href="/join"
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="회원가입"
            >
              <UserPlus className="w-5 h-5 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>

      {/* 검색바 */}
      <div
        className={`border-t border-gray-200 bg-gray-50 transition-all duration-300 overflow-hidden ${
          isSearchOpen ? "max-h-20 py-4" : "max-h-0"
        }`}
        aria-hidden={!isSearchOpen}
      >
        <div className="container mx-auto px-4">
          <div className="relative max-w-xl mx-auto">
            <label htmlFor="search-input" className="sr-only">
              검색
            </label>
            <input
              id="search-input"
              type="search"
              placeholder="검색어를 입력하세요"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all duration-200"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="검색 실행"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});

HeaderPC.displayName = "HeaderPC";
export default HeaderPC;
