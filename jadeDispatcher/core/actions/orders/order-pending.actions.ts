import { orderApi } from "@/core/api/order-api";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage";
import { OrderResponse } from "@/infraestructure/interfaces/orders-response";
import { OrderMapper } from "@/infraestructure/mappers/order.mapper";

export const ordersPendingAction = async (pageSize = 5, pageNumber = 1) => {
  try {
    const sucursal = await SecureStorageAdapter.getItem("username");
    const { data } = await orderApi.get<OrderResponse[]>(
      `/Notificacion?filters={"Sucursal":"${sucursal}", "EstadoOrden":1}&isAscending=false`,
      {
        params: {
          pageSize,
          pageNumber,
        },
      }
    );

    const orders = data.map((o) => OrderMapper.fromOrderResponseToEntity(o));

    return orders;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
