"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { deleteCookie } from "@/utils/cookies";
import { useSuspenseQuery } from "@tanstack/react-query";
import { userApi } from "@/remote/user";

export default function Bio() {
  const router = useRouter();
  const { data: currentUser } = useSuspenseQuery({
    queryKey: ["currentUser"],
    queryFn: async () => (await userApi.getCurrentUser())?.data,
  });

  const handleLogout = () => {
    deleteCookie("session-token");
    router.push("/login");
  };

  if (!currentUser) return null;

  console.log(currentUser);

  return (
    <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-gray-50 p-4">
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xl font-semibold text-gray-900">
            {currentUser.name}
          </p>
          <p className="truncate text-sm text-gray-500">{currentUser.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="ml-2 rounded-md p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-600 transition-colors"
          title="로그아웃"
        >
          <LogOut className="size-5" />
        </button>
      </div>
    </div>
  );
}
