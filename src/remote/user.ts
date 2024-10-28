import { api } from "./api";
import { ApiResponse } from "./typings";

export interface User {
  id: string;
  uNumbber: number;
  email: string;
  name: string;
  team: string;
  role: string;
  createdAt: string;
}

type UserListResponse = ApiResponse<User[]>;

export const userApi = {
  getUsers: async (): Promise<UserListResponse> => {
    return api.get("/user");
  },
};
