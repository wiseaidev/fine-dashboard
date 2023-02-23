import { AuthProvider } from "@pankod/refine-core";

export const TOKEN_KEY = "refine-auth";
export const authProvider: AuthProvider = {
  login: async ({ email, password, dispatch }) => {
    if (email && password) {
      // TODO: dispatch redux action
      localStorage.setItem(TOKEN_KEY, email);
      return Promise.resolve();
    }
    return Promise.reject(new Error("username: admin, password: admin"));
  },
  logout: () => {
    localStorage.clear();
    return Promise.resolve();
  },
  checkError: (error) => {
    if (error?.response?.status === 401) {
      return Promise.reject("/login");
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return Promise.resolve();
    }

    return Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
  getUserIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return Promise.reject();
    }
    return Promise.resolve({
      id: 1,
    });
  },
};
