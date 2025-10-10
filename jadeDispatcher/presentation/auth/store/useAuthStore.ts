import { authCheckStatus, authLogin } from "@/core/actions/auth/auth-actions";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage";
import { User } from "@/infraestructure/interfaces/User";
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

  login: (username: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => void;
  changeStatus: (token?: string, user?: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: AuthStatus.unauthenticated,
  token: undefined,
  username: undefined,

  login: async (username: string, password: string) => {
    const resp = await authLogin(username, password);
    return get().changeStatus(resp?.token, resp?.username);
  },

  changeStatus: async (token?: string, username?: string) => {
    if (!token || !username) {
      set({
        status: AuthStatus.unauthenticated,
        token: undefined,
        username: undefined,
      });
      await SecureStorageAdapter.deleteItem("token");
      await SecureStorageAdapter.deleteItem("username");
      return false;
    }

    set({
      status: AuthStatus.authenticated,
      token: token,
      username: username,
    });
    await SecureStorageAdapter.setItem("token", token);
    await SecureStorageAdapter.setItem("username", username);
    return true;
  },

  checkStatus: async () => {
    const token = await SecureStorageAdapter.getItem("token");
    const username = await SecureStorageAdapter.getItem("username");

    get().changeStatus(token ?? undefined, username ?? undefined);
  },

  logout: async () => {
    SecureStorageAdapter.deleteItem("token");
    SecureStorageAdapter.deleteItem("username");
    set({
      status: AuthStatus.unauthenticated,
      token: undefined,
      username: undefined,
    });
  },
}));
