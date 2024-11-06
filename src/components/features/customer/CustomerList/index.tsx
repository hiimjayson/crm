import { User, userApi } from "@/remote/user";
import { useSuspenseQuery } from "@tanstack/react-query";
import { kstFormat } from "@toss/date";
import { Table } from "@/components/common/Table";
import { CustomerFilterValues } from "../CustomerFilter/useCustomerFilter";

interface Props {
  filters: CustomerFilterValues;
}

export function CustomerList({ filters }: Props) {
  const { data: users } = useSuspenseQuery({
    queryKey: ["users", filters],
    queryFn: async () => (await userApi.getUsers())?.data,
  });

  return (
    <Table<User>
      columns={[
        { key: "name", title: "이름", width: 140 },
        { key: "uNumber", title: "사번", width: 240 },
        { key: "email", title: "이메일" },
        { key: "team", title: "팀" },
        { key: "role", title: "권한" },
        { key: "createdAt", title: "가입일" },
      ]}
      rows={users?.map((user) => ({
        key: user.id,
        cells: [
          { key: "name", value: user.name },
          { key: "uNumber", value: user.uNumber.toString() },
          { key: "email", value: user.email },
          { key: "team", value: user.team },
          { key: "role", value: user.role },
          {
            key: "createdAt",
            value: kstFormat(new Date(user.createdAt), "yyyy.MM.dd"),
          },
        ],
      }))}
    />
  );
}
