import { orderApi } from "@/core/api/order-api";
import { Order } from "@/infraestructure/interfaces/Order";
import { OrderRequest } from "@/infraestructure/interfaces/order-request";
import { OrderResponse } from "@/infraestructure/interfaces/orders-response";

export const createOrderAction = async (data: OrderRequest) => {
  try {
    const { data: order } = await orderApi.post<OrderResponse>(
      `/Notificacion/`,
      { ...data, estadoOrden: 2, fecha: new Date().toISOString() }
    );

    console.log("CREATE: " + JSON.stringify(order));

    const { data: orderinfo } = await orderApi.post("/NotificacionContacto", {
      notificacion: order.oid,
      contacto: data.contacto,
      tipo: "W",
      copia: false,
      enviado: false,
      intento: 0,
    });

    console.log(orderinfo);

    return order;
  } catch (error) {
    return null;
  }
};
