import { orderApi } from "@/core/api/order-api";
import { AuthResponse } from "@/infraestructure/interfaces/auth-response";
import { OrderResponse } from "@/infraestructure/interfaces/orders-response";

const returnUserToken = (
  data: OrderResponse
): { username: string; token: string } => {
  const { sucursal, oid, rnc } = data;

  return {
    username: sucursal,
    token: rnc,
  };
};

export const authLogin = async (username: string, password: string) => {
  try {
    const { data } = await orderApi.get<OrderResponse[]>(
      `/Notificacion?filterOn=Sucursal&filterQuery=${username}&pageNumber=1&pageSize=10`
    );
    console.log(data);

    const resp = data[0];
    console.log(resp);
    if (
      resp !== null &&
      resp.sucursal === username &&
      resp.sucursal === password
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

export const authCheckStatus = async (username: string) => {
  try {
    const { data } = await orderApi.get<OrderResponse>(
      `/Notificacion?filterOn=Sucursal&filterQuery=${username}&pageNumber=1&pageSize=10`
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
