import { authCheckStatus, authLogin } from "@/core/auth/actions/auth-actions";
import { User } from "@/core/auth/interfaces/user";
import { create } from "zustand";
export enum AuthStatus {
  "authenticated",
  "unauthenticated",
  "checking",
}

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  changeStatus: (token?: string, user?: User) => boolean;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: AuthStatus.unauthenticated,
  token: undefined,
  user: undefined,

  login: async (email: string, password: string) => {
    const resp = await authLogin(email, password);
    return get().changeStatus(resp?.token, resp?.user);
  },

  changeStatus: (token?: string, user?: User) => {
    if (!token || !user) {
      set({
        status: AuthStatus.unauthenticated,
        token: undefined,
        user: undefined,
      });
      return false;
    }

    set({
      status: AuthStatus.authenticated,
      token: token,
      user: user,
    });

    return true;
  },

  checkStatus: async () => {
    const resp = await authCheckStatus();

    get().changeStatus(resp?.token, resp?.user);
  },

  logout: async () => {
    set({
      status: AuthStatus.unauthenticated,
      token: undefined,
      user: undefined,
    });
  },
}));
