import { api } from "./api";
import { ApiResponse } from "./typings";

export const authApi = {
  checkAuth: async () => {
    try {
      const response = await api.get<ApiResponse<null>>("/auth/check");
      return response.success;
    } catch (error) {
      console.error("인증 확인 실패:", error);
      return false;
    }
  },
  login: async (id: string, password: string) => {
    const response = await api.post<ApiResponse<string>>("/auth/login", {
      id,
      password,
    });
    return response.data;
  },
};
