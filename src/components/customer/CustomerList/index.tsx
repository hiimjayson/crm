import { userApi } from "@/remote/user";
import { useSuspenseQuery } from "@tanstack/react-query";
import { kstFormat } from "@toss/date";
import { Table } from "@/components/common/Table";

export function CustomerList() {
  const { data: users } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: async () => (await userApi.getUsers())?.data,
  });

  return (
    <Table
      columns={[
        { key: "name", title: "이름" },
        { key: "email", title: "이메일" },
        { key: "createdAt", title: "가입일" },
      ]}
      rows={users?.map((user) => ({
        key: user.id,
        cells: [
          { key: "name", value: user.name },
          { key: "email", value: user.email },
          {
            key: "createdAt",
            value: kstFormat(new Date(user.createdAt), "yyyy.MM.dd"),
          },
        ],
      }))}
    />
  );
}
