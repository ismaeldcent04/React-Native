import { orderApi } from "@/core/api/order-api";
import { Formatter } from "@/helpers/formatters/formatter";
import { Order } from "@/infraestructure/interfaces/Order";
import { OrderRequest } from "@/infraestructure/interfaces/order-request";
import { OrderResponse } from "@/infraestructure/interfaces/orders-response";

export const updateOrderAction = async (id: number, status: number) => {
  try {
    const { data: order } = await orderApi.get<OrderResponse>(`/Pedidos/${id}`);
    console.log("UPDATE GET:" + order);

    if (order) {
      const orderdata = {
        ...order,
        estado: status,
        despachado: true,
      };

      console.log(orderdata);
      const { data } = await orderApi.put<OrderResponse>(
        `/Pedidos/${id}`,
        orderdata
      );

      console.log("UPDATE:" + data);

      return order;
    }

    return null;
  } catch (error) {
    return null;
  }
};
