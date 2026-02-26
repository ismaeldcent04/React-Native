import { codeApi } from "../../api/code-api";

export interface AuthResponse {
  username: string;
  token: string;
  userId: string;
}

const returnUserToken = (
  data: AuthResponse
): { username: string; token: string; userId: string } => {
  const { token, username, userId } = data;

  return {
    username,
    token,
    userId,
  };
};

export const authLogin = async (username: string, password: string) => {
  username = username.toLocaleLowerCase();

  try {
    const { data } = await codeApi.post<AuthResponse>("/Auth/login", {
      username,
      password,
    });

    console.log(data);

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
