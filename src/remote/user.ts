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
type UserResponse = ApiResponse<User>;

export const userApi = {
  getUsers: async (): Promise<UserListResponse> => {
    return api.get("/user");
  },
  getCurrentUser: async (): Promise<UserResponse> => {
    return api.get("/user/me");
  },
};
