import { User } from "@/remote/user";

export const userFactory = {
  create: (): User => {
    return {
      id: "1",
      uNumbber: 1,
      email: "test@test.com",
      name: "test",
      team: "test",
      role: "test",
      createdAt: "2024-01-01",
    };
  },
};
