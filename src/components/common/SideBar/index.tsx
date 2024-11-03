import { Suspense } from "react";
import Section from "./Section";
import MenuItem from "./MenuItem";
import Bio from "./Bio";
import CommandMenu from "../CommandMenu";
import { MENU_ITEMS } from "@/constants/menu";

export default function SideBar() {
  return (
    <>
      <CommandMenu />
      <nav className="relative w-64 bg-white border-r border-gray-200 h-screen">
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
