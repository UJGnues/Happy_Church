export type NavItem =
  | { title: string; submenu: { title: string; href: string }[] }
  | { title: string; href: string };

export const navItems: NavItem[] = [
  {
    title: "교회소개",
    submenu: [
      { title: "교회안내", href: "/about/guide" },
      { title: "인사말", href: "/about/greeting" },
      { title: "교회로고", href: "/about/logo" },
      { title: "교회홍보", href: "/about/promotion" }
    ]
  },
  {
    title: "예배 및 행사",
    submenu: [
      { title: "예배 안내", href: "/worship/info" },
      { title: "금주의 주보", href: "/worship/bulletin" },
      { title: "오늘의 말씀", href: "/worship/bible" },
      { title: "월간 영혼섬김", href: "/worship/mission" },
      { title: "교회행사", href: "/worship/event" }
    ]
  },
  {
    title: "행복한뉴스",
    submenu: [
      { title: "교회소식", href: "/news/notice" },
      { title: "새가족소개", href: "/news/newcomers" },
      { title: "갤러리", href: "/news/gallery" }
    ]
  },
  {
    title: "오시는 길",
    href: "/location"
  }
];
