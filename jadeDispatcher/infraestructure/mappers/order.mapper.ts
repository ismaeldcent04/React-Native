import { Order } from "../interfaces/Order";

import { OrderResponse } from "../interfaces/orders-response";

export class OrderMapper {
  static fromOrderResponseToEntity(order: OrderResponse): Order {
    return {
      id: order.oid,
      name: order.firma,
      date: order.fecha,
      orderStatus: order.estadoOrden,
      orderInfo: order.tipoNotificacion,
      contact: order.notificacionContactos[0].contacto,
    };
  }
}
