import { codeApi } from "../api/code-api";

export interface AuthResponse {
  username: string;
  token: string;
}

const returnUserToken = (
  data: AuthResponse
): { username: string; token: string } => {
  const { token, username } = data;

  return {
    username,
    token,
  };
};

export const authLogin = async (username: string, password: string) => {
  username = username.toLocaleLowerCase();

  try {
    const { data } = await codeApi.post<AuthResponse>("/login", {
      username,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } = await codeApi.get<AuthResponse>("/Auth/check-status");

    return returnUserToken(data);
  } catch (error) {
    return null;
  }
};
