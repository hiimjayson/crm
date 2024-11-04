import { userApi } from "@/remote/user";
import { useSuspenseQuery } from "@tanstack/react-query";
import { kstFormat } from "@toss/date";
import Table from "@/components/atom/Table";

export function CustomerList() {
  const { data: users } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: async () => (await userApi.getUsers())?.data,
  });

  return (
    <Table>
      <Table.THead>
        <Table.Tr>
          <Table.Th>이름</Table.Th>
          <Table.Th>이메일</Table.Th>
          <Table.Th>가입일</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody>
        {users?.map((user) => (
          <Table.Tr key={user.id}>
            <Table.Td>{user.name}</Table.Td>
            <Table.Td>{user.email}</Table.Td>
            <Table.Td>
              {kstFormat(new Date(user.createdAt), "yyyy.MM.dd")}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.TBody>
    </Table>
  );
}
