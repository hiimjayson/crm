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
    return {
      success: true,
      data: {
        id: "dsfsdf",
        uNumbber: 1,
        email: "test@test.com",
        name: "홍길동",
        team: "영업팀",
        role: "영업팀장",
        createdAt: "2024-01-01",
      },
    };

    return api.get("/user/me");
  },
};
