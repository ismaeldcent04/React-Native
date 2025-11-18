import { authCheckStatus, authLogin } from "@/core/auth/actions/auth-actions";
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

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  changeStatus: (token?: string, username?: string) => boolean;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: AuthStatus.unauthenticated,
  token: undefined,
  user: undefined,

  login: async (username: string, password: string) => {
    const resp = await authLogin(username, password);
    return get().changeStatus(resp?.token, resp?.username);
  },

  changeStatus: (token?: string, username?: string) => {
    if (!token || !username) {
      set({
        status: AuthStatus.unauthenticated,
        token: undefined,
        username: undefined,
      });
      return false;
    }

    set({
      status: AuthStatus.authenticated,
      token: token,
      username: username,
    });

    return true;
  },

  checkStatus: async () => {
    const resp = await authCheckStatus();

    get().changeStatus(resp?.token, resp?.username);
  },

  logout: async () => {
    set({
      status: AuthStatus.unauthenticated,
      token: undefined,
      username: undefined,
    });
  },
}));
