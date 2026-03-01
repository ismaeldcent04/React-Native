import { authCheckStatus, authLogin } from "@/core/auth/actions/auth-actions";
import { User } from "@/core/auth/interface/user";
import { create } from "zustand";
export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (username: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  changeStatus: (token?: string, user?: User) => boolean;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: "unauthenticated",
  token: undefined,
  user: undefined,

  changeStatus: (token?: string, user?: User) => {
    if (!token || !user) {
      set({ status: "unauthenticated", token: undefined, user: undefined });
      return false;
    }

    set({ status: "authenticated", token, user });
    return true;
  },

  login: async (username: string, password: string) => {
    const resp = await authLogin(username, password);

    return get().changeStatus(resp?.token, resp?.user);
  },

  checkStatus: async () => {
    const resp = await authCheckStatus();

    get().changeStatus(resp?.token, resp?.user);
  },

  logout: async () => {
    set({ status: "unauthenticated", token: undefined, user: undefined });
  },
}));
