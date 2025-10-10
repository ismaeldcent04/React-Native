import { ordersDispatchedAction } from "@/core/actions/orders/order-dispatched.actions";
import { ordersPendingAction } from "@/core/actions/orders/order-pending.actions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { ordersAllAction } from "../core/actions/orders/order-all.actions";
import { Order } from "@/infraestructure/interfaces/Order";
import { updateOrderAction } from "@/core/actions/order/order-update.actions";
import { OrderRequest } from "@/infraestructure/interfaces/order-request";
import { OrderMapper } from "../infraestructure/mappers/order.mapper";
import { createOrderAction } from "@/core/actions/order/create-order-actions";

export const useOrders = () => {
  const queryClient = useQueryClient();
  const pendingOrdersQuery = useQuery({
    queryKey: ["orders", "pending"],
    queryFn: ordersPendingAction,
    staleTime: 10000,
    refetchInterval: 5000,
  });

  const dispatchedOrdersQuery = useQuery({
    queryKey: ["orders", "dispatched"],
    queryFn: ordersDispatchedAction,
    staleTime: 10000,
    refetchInterval: 5000,
  });

  const allOrdersQuery = useQuery({
    queryKey: ["orders", "all"],
    queryFn: ordersAllAction,
    staleTime: 10000,
    refetchInterval: 5000,
  });

  const orderMutation = useMutation({
    mutationFn: async (data: OrderRequest) => {
      await updateOrderAction(data.oid);

      const order = await createOrderAction(data);

      if (order) return OrderMapper.fromOrderResponseToEntity(order);
    },

    onSuccess(data: Order | undefined) {
      queryClient.invalidateQueries({
        queryKey: ["orders", "pending"],
      });

      queryClient.invalidateQueries({
        queryKey: ["orders", "all"],
      });

      queryClient.invalidateQueries({
        queryKey: ["orders", "dispatched"],
      });
    },
  });
  return {
    pendingOrdersQuery,
    dispatchedOrdersQuery,
    allOrdersQuery,
    orderMutation,
  };
};
