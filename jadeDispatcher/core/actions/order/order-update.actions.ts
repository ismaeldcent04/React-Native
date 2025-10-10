import { orderApi } from "@/core/api/order-api";
import { Order } from "@/infraestructure/interfaces/Order";
import { OrderRequest } from "@/infraestructure/interfaces/order-request";
import { OrderResponse } from "@/infraestructure/interfaces/orders-response";

export const updateOrderAction = async (id: number) => {
  try {
    const { data: order } = await orderApi.get<OrderResponse>(
      `/Notificacion/${id}`
    );
    console.log("UPDATE GET:" + order);
    if (order) {
      const { data } = await orderApi.put<OrderResponse>(
        `/Notificacion/${id}`,
        {
          ...order,
          estadoOrden: 0,
        }
      );

      console.log("UPDATE:" + data);

      return order;
    }

    return null;
  } catch (error) {
    return null;
  }
};
