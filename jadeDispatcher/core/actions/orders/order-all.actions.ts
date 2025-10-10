import { orderApi } from "@/core/api/order-api";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage";
import { OrderResponse } from "@/infraestructure/interfaces/orders-response";
import { OrderMapper } from "@/infraestructure/mappers/order.mapper";

export const ordersAllAction = async () => {
  try {
    const sucursal = await SecureStorageAdapter.getItem("username");
    console.log(sucursal);
    const { data } = await orderApi.get<OrderResponse[]>(
      `/Notificacion?filterOn=TipoNotificacion&filterQuery=${sucursal}&isAscending=false&pageNumber=1&pageSize=10`
    );

    const orders = data.map((o) => OrderMapper.fromOrderResponseToEntity(o));

    return orders;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
