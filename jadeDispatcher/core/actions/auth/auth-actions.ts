import { orderApi } from "@/core/api/order-api";
import { AuthResponse } from "@/infraestructure/interfaces/auth-response";
import { User } from "@/infraestructure/interfaces/User";

const returnUserToken = (
  data: AuthResponse
): { username: string; token: string } => {
  const { contactoNombre, oid, nota } = data;

  const [_, token] = nota.split(";");

  return {
    username: contactoNombre,
    token,
  };
};

export const authLogin = async (username: string, password: string) => {
  try {
    const { data } = await orderApi.get<AuthResponse[]>(
      `/ClienteComunicacion?filterOn=ContactoNombre&filterQuery=${username}&pageNumber=1&pageSize=10`
    );
    console.log(data);

    const resp = data[0];
    console.log(resp);
    if (
      resp !== null &&
      resp.contactoNombre.includes(username) &&
      resp.contactoNombre.includes(password)
    ) {
      return returnUserToken(resp);
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } = await orderApi.get<AuthResponse>(
      `/ClienteComunicacion?filterOn=ContactoNombre&filterQuery=Pedidos&pageNumber=1&pageSize=10`
    );
    if (data !== null) {
      return returnUserToken(data);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
