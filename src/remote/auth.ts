import { api } from "./api";
import { ApiResponse } from "./typings";

export const authApi = {
  checkAuth: async (token?: string) => {
    try {
      const response = await api.get<ApiResponse<{ sessionId: string }>>(
        "/auth/check",
        {},
        token
      );
      return response.data;
    } catch (error) {
      console.error("인증 확인 실패:", error);
      return false;
    }
  },
  login: async (id: string, password: string) => {
    const response = await api.post<ApiResponse<{ sessionId: string }>>(
      "/auth/login",
      {
        id,
        password,
      }
    );

    return response.data;
  },
};
