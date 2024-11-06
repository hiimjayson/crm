import { Suspense } from "react";
import Section from "./Section";
import MenuItem from "./MenuItem";
import Bio from "./Bio";
import { MENU_ITEMS } from "@/constants/menu";
import Link from "next/link";

export default function SideBar() {
  return (
    <>
      <nav className="relative w-64 bg-white border-r border-gray-200 h-screen">
        <Link href="/">
          <p className="text-2xl font-bold mt-8 mb-6 ml-4 select-none">Logo</p>
        </Link>

        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          {MENU_ITEMS.map((section) => (
            <Section key={section.category} title={section.category}>
              {section.items.map((item) => (
                <MenuItem key={item.href} href={item.href}>
                  {item.title}
                </MenuItem>
              ))}
            </Section>
          ))}
        </div>

        <Suspense fallback={<div className="h-[80px]" />}>
          <Bio />
        </Suspense>
      </nav>
    </>
  );
}
