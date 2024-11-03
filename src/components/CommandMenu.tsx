"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "lucide-react";

const MENU_ITEMS = [
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
];

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredItems = MENU_ITEMS.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  const handleSelect = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="fixed left-1/2 top-1/4 w-full max-w-xl -translate-x-1/2 p-4">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
          <div className="flex items-center border-b border-gray-200 px-3">
            <Command className="h-5 w-5 text-gray-500" />
            <input
              className="flex-1 border-0 bg-transparent px-2 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
              placeholder="메뉴 검색..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <kbd className="hidden rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500 sm:inline-block">
              ESC
            </kbd>
          </div>
          <div className="max-h-96 overflow-y-auto p-2">
            {filteredItems.map((category) => (
              <div key={category.category} className="mb-4">
                <div className="px-2 py-1 text-xs font-semibold text-gray-500">
                  {category.category}
                </div>
                {category.items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleSelect(item.href)}
                    className="block w-full rounded-lg px-2 py-2 text-left text-sm text-gray-900 hover:bg-gray-100"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
