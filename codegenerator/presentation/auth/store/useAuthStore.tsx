import { authCheckStatus, authLogin } from "@/core/auth/actions/auth-actions";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { create } from "zustand";
export enum AuthStatus {
  "authenticated",
  "unauthenticated",
  "checking",
}

export interface AuthState {
  status: AuthStatus;
  token?: string;
  username?: string;
  userId?: string;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  changeStatus: (
    token?: string,
    username?: string,
    userId?: string
  ) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: AuthStatus.checking,
  token: undefined,
  username: undefined,
  userId: undefined,

  login: async (username: string, password: string) => {
    const resp = await authLogin(username, password);
    return get().changeStatus(resp?.token, resp?.username, resp?.userId);
  },

  changeStatus: async (token?: string, username?: string, userId?: string) => {
    if (!token || !username || !userId) {
      set({
        status: AuthStatus.unauthenticated,
        token: undefined,
        username: undefined,
        userId: undefined,
      });
      await SecureStorageAdapter.deleteItem("token");
      return false;
    }

    set({
      status: AuthStatus.authenticated,
      token: token,
      username: username,
      userId: userId,
    });

    await SecureStorageAdapter.setItem("token", token);
    await SecureStorageAdapter.setItem("userId", userId);

    return true;
  },

  checkStatus: async () => {
    const resp = await authCheckStatus();

    get().changeStatus(resp?.token, resp?.username, resp?.userId);
  },

  logout: async () => {
    SecureStorageAdapter.deleteItem("token");
    SecureStorageAdapter.deleteItem("userId");
    set({
      status: AuthStatus.unauthenticated,
      token: undefined,
      username: undefined,
      userId: undefined,
    });
  },
}));
