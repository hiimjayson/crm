"use client";

import { useQuery } from "@tanstack/react-query";
import { User, userApi } from "@/remote/user";

export default function UserListPage() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => (await userApi.getUsers())?.data,
  });

  if (isLoading) {
    return <div className="p-4">로딩 중...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        사용자 목록을 불러오는데 실패했습니다.
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">사용자 목록</h1>
      <div className="grid gap-4">
        {users?.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">
              가입일: {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
