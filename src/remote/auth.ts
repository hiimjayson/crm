import { api } from "./api";

export const authApi = {
  checkAuth: async () => {
    try {
      const response = await api.get("/auth/check");
      return response.isValid;
    } catch (error) {
      console.error("인증 확인 실패:", error);
      return false;
    }
  },
};
