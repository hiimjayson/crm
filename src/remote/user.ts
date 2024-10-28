import { api } from "./api";
import { ApiResponse } from "./typings";

interface User {
  id: string;
  uNumbber: number;
  name: string;
  team: string;
  role: string;
}

type UserListResponse = ApiResponse<User[]>;

export const userApi = {
  getUsers: async (): Promise<UserListResponse> => {
    return api.get("/user");
  },
};
