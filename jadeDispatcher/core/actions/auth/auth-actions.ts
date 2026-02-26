import { orderApi } from "@/core/api/order-api";
import { OrderResponse } from "@/infraestructure/interfaces/orders-response";

const returnUserToken = (
  data: OrderResponse
): { username: string; token: string } => {
  const { sucursal, oid } = data;

  console.log(sucursal, oid);

  return {
    username: sucursal,
    token: oid.toString(),
  };
};

export const authLogin = async (username: string, password: string) => {
  try {
    console.log(username);
    const { data } = await orderApi.get<OrderResponse[]>(
      `/Notificacion?filters={"Sucursal": "${username}"}&pageNumber=1&pageSize=10`
    );

    const resp = data[0];

    if (
      resp !== null &&
      resp.sucursal === username &&
      resp.sucursal === password
    ) {
      console.log("Estoy aqui");
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
