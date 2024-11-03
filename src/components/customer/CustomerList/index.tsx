import { userApi } from "@/remote/user";
import { useSuspenseQuery } from "@tanstack/react-query";
import { kstFormat } from "@toss/date";

export function CustomerList() {
  const { data: users } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: async () => (await userApi.getUsers())?.data,
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              이름
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              이메일
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              가입일
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users?.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {kstFormat(new Date(user.createdAt), "yyyy.MM.dd")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
