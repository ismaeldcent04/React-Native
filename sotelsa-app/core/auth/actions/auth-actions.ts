import { consultingApi } from "../../api/consultingApi";
import { User } from "../interface/user";

export interface AuthResponse {
  token: string;
  username: string;
  userId: number;
  client: number;
}

const returnUserToken = (data: AuthResponse): { user: User; token: string } => {
  const { token, username, userId, client } = data;

  const user: User = {
    id: userId,
    client,
    username,
  };

  return {
    user,
    token,
  };
};

export const authLogin = async (username: string, password: string) => {
  username = username.toLowerCase();

  try {
    const { data } = await consultingApi.post<AuthResponse>("/Auth/login", {
      username,
      password,
    });

    console.log(data);

    return returnUserToken(data);
  } catch (err) {
    console.log(err);
    throw new Error("User and/or password not valid");
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } =
      await consultingApi.get<AuthResponse>("/Auth/check-status");

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
