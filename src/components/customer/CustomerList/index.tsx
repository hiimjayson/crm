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
        { key: "name", title: "이름", minWidth: 140 },
        { key: "uNumber", title: "사번", minWidth: 240 },
        { key: "email", title: "이메일" },
        { key: "email2", title: "이메일" },
        { key: "team", title: "팀" },
        { key: "role", title: "권한" },
        { key: "createdAt", title: "가입일" },
      ]}
      rows={users?.map((user) => ({
        key: user.id,
        cells: [
          { key: "name", value: user.name },
          { key: "uNumber", value: user.uNumbber.toString() },
          { key: "email", value: user.email },
          { key: "email2", value: user.email },
          { key: "team", value: user.team },
          { key: "role", value: user.role },
          {
            key: "createdAt",
            value: kstFormat(new Date(user.createdAt), "yyyy.MM.dd"),
          },
        ],
      }))}
      freezedColumns={2}
    />
  );
}
