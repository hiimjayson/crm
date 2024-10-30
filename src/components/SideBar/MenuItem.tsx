"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  href: string;
  children: React.ReactNode;
}

export default function MenuItem({ href, children }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block pl-6 pr-4 py-2 text-md ${
        isActive ? "text-blue-600 font-bold" : "text-gray-500"
      } transition-colors hover:bg-gray-100`}
    >
      {children}
    </Link>
  );
}
