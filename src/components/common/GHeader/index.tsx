"use client";

import { Search } from "lucide-react";

interface Props {
  onInputClick?: () => void;
}
export function GHeader({ onInputClick }: Props) {
  return (
    <header className="w-full h-16 px-4 py-3 bg-white border-b border-gray-200">
      {onInputClick != null ? (
        <div
          className="flex items-center gap-2 w-full sm:w-[400px] h-full px-3 rounded-full bg-gray-100 border border-gray-300 text-gray-500 cursor-pointer"
          onClick={onInputClick}
        >
          <Search className="w-4 h-4" />
          <p>통합 검색</p>
          <p className="hidden sm:block ml-auto text-gray-400">Ctrl + K</p>
        </div>
      ) : null}
    </header>
  );
}
