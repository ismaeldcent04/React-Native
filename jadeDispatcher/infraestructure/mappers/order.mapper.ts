import { Order } from "../interfaces/Order";

import { OrderResponse } from "../interfaces/orders-response";

export class OrderMapper {
  static fromOrderResponseToEntity(order: OrderResponse): Order {
    return {
      id: order.oid,
      name: order.nombre,
      date: order.fecha,
      orderStatus: order.estado,
      orderNo: order.control,
      sucursal: order.sucursal,
      contact: order.telefono,
      notified: order.notificado,
      dispatched: order.despachado,
      dispatchedDate: order.despachadoFecha,
    };
  }
}
