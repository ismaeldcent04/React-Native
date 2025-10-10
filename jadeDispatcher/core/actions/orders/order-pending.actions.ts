import { orderApi } from "@/core/api/order-api";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage";
import { OrderResponse } from "@/infraestructure/interfaces/orders-response";
import { OrderMapper } from "@/infraestructure/mappers/order.mapper";

export const ordersPendingAction = async () => {
  try {
    const sucursal = await SecureStorageAdapter.getItem("username");
    const { data } = await orderApi.get<OrderResponse[]>(
      "/Notificacion?filterOn=EstadoOrden&filterQuery=1&isAscending=false&pageNumber=1&pageSize=10"
    );

    const orders = data.map((o) => OrderMapper.fromOrderResponseToEntity(o));

    return orders.filter((x) => x.orderInfo.includes(sucursal ?? ""));
  } catch (error) {
    console.log(error);
    throw error;
  }
};
