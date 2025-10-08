import { orderApi } from "@/core/api/order-api";
import { OrderResponse } from "@/infraestructure/interfaces/orders-response";
import { OrderMapper } from "@/infraestructure/mappers/order.mapper";

export const ordersDispatchedAction = async () => {
  try {
    const { data } = await orderApi.get<OrderResponse[]>(
      "/Notificacion?filterOn=EstadoOrden&filterQuery=0&isAscending=false&pageNumber=1&pageSize=10"
    );

    const orders = data.map((o) => OrderMapper.fromOrderResponseToEntity(o));

    return orders;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
