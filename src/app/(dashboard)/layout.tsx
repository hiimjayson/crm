"use client";
import {
  CommandMenu,
  CommandMenuHandle,
} from "@/components/common/CommandMenu";
import { GHeader } from "@/components/common/GHeader";
import SideBar from "@/components/common/SideBar";
import { useRef } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const commandMenuRef = useRef<CommandMenuHandle>(null);

  return (
    <div className="flex h-screen">
      <CommandMenu ref={commandMenuRef} />

      <SideBar />
      <div className="flex flex-col flex-1">
        <GHeader onInputClick={() => commandMenuRef.current?.open()} />
        {children}
      </div>
    </div>
  );
}
