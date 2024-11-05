import { UserRepository } from "@/mock/repositories/user.repository";
import { ApiResponse } from "./typings";

export interface User {
  id: string;
  uNumber: number;
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
    return {
      success: true,
      data: UserRepository.getUsers(),
    };
  },
  getCurrentUser: async (): Promise<UserResponse> => {
    return {
      success: true,
      data: UserRepository.getCurrentUser(),
    };
  },
};
