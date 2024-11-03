import SideBar from "@/components/common/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col flex-1">
        <header className="w-full h-12 bg-white border-b border-gray-200" />
        {children}
      </div>
    </div>
  );
}
