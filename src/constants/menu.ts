export const MENU_ITEMS = [
  {
    category: "영업 리드 관리",
    items: [
      { title: "주요사 리마인더", href: "/leads/current" },
      { title: "매출 리마인더", href: "/leads/sales" },
    ],
  },
  {
    category: "회원 관리",
    items: [
      { title: "대시보드", href: "/members/dashboard" },
      { title: "회원 내역", href: "/members/list" },
    ],
  },
  {
    category: "컨텐츠 관리",
    items: [
      { title: "다이어리", href: "/contents/diary" },
      { title: "신청내역", href: "/contents/news" },
      { title: "후기", href: "/contents/etc" },
    ],
  },
  {
    category: "C/S 관리",
    items: [
      { title: "전화 문의 내역", href: "/cs/contact" },
      { title: "채팅 문의 내역", href: "/user" },
    ],
  },
] as const;
