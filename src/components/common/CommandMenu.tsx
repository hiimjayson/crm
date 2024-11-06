"use client";

import { forwardRef, useEffect, useState, useImperativeHandle } from "react";
import { useRouter } from "next/navigation";
import { Command } from "lucide-react";
import { MENU_ITEMS } from "@/constants/menu";

export interface CommandMenuHandle {
  open: () => void;
}

export const CommandMenu = forwardRef<CommandMenuHandle>(
  function CommandMenuBase(_, ref) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
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

    useEffect(() => {
      if (isOpen) {
        setMounted(true);
      } else {
        const timer = setTimeout(() => setMounted(false), 200);
        return () => clearTimeout(timer);
      }
    }, [isOpen]);

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

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
    }));

    if (!mounted) return null;

    return (
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="fixed inset-0 bg-black/50" />
        <div className="fixed left-1/2 top-1/4 w-full max-w-xl -translate-x-1/2 p-4">
          <div
            className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl transition-all duration-200 ${
              isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="flex items-center border-b border-gray-200 px-3">
              <Command className="h-5 w-5 text-gray-500" />
              <input
                className="flex-1 border-0 bg-transparent px-2 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                placeholder="메뉴 검색..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
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
);
