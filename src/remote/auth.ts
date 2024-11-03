export const authApi = {
  checkAuth: async (token?: string) => {
    try {
      return {
        sessionId: token,
      };
    } catch (error) {
      console.error("인증 확인 실패:", error);
      return false;
    }
  },
  login: async (id: string, password: string) => {
    return {
      sessionId: `${id}-${password}`,
    };
  },
};
