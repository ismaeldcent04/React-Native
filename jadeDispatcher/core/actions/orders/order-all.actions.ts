import { orderApi } from "@/core/api/order-api";
import { OrderResponse } from "@/infraestructure/interfaces/orders-response";
import { OrderMapper } from "@/infraestructure/mappers/order.mapper";

export const ordersAllAction = async () => {
  try {
    const { data } = await orderApi.get<OrderResponse[]>(
      "/Notificacion?isAscending=false&pageNumber=1&pageSize=10"
    );

    const orders = data.map((o) => OrderMapper.fromOrderResponseToEntity(o));

    return orders;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
