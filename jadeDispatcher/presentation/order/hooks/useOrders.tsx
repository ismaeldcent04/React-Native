import { ordersDispatchedAction } from "@/core/actions/orders/order-dispatched.actions";
import { ordersPendingAction } from "@/core/actions/orders/order-pending.actions";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { ordersAllAction } from "../../../core/actions/orders/order-all.actions";
import { Order } from "@/infraestructure/interfaces/Order";
import { updateOrderAction } from "@/core/actions/order/order-update.actions";
import { OrderRequest } from "@/infraestructure/interfaces/order-request";
import { OrderMapper } from "../../../infraestructure/mappers/order.mapper";
import { createOrderAction } from "@/core/actions/order/create-order-actions";

export const useOrders = () => {
  const queryClient = useQueryClient();
  const pendingOrdersQuery = useInfiniteQuery({
    queryKey: ["orders", "pending"],
    queryFn: ({ pageParam = 1 }) => ordersPendingAction(10, pageParam),
    staleTime: 10000,
    refetchInterval: 5000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < 10) return undefined;
      return allPages.length + 1;
    },
  });

  const dispatchedOrdersQuery = useInfiniteQuery({
    queryKey: ["orders", "dispatched"],
    queryFn: ({ pageParam = 1 }) => ordersDispatchedAction(10, pageParam),
    staleTime: 10000,
    refetchInterval: 5000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < 10) return undefined;
      return allPages.length + 1;
    },
  });

  const allOrdersQuery = useInfiniteQuery({
    queryKey: ["orders", "all"],
    queryFn: ({ pageParam = 1 }) => ordersAllAction(10, pageParam),
    staleTime: 10000,
    refetchInterval: 5000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < 10) return undefined;
      return allPages.length + 1;
    },
  });

  const upsertOrderMutation = useMutation({
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
        queryKey: ["orders", "dispatched"],
      });
    },
  });

  const softDeleteOrderMutation = useMutation({
    mutationFn: async (id: number) => {
      await updateOrderAction(id);
    },

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["orders", "pending"],
      });
    },
  });

  return {
    pendingOrdersQuery,
    dispatchedOrdersQuery,
    allOrdersQuery,
    upsertOrderMutation,
    softDeleteOrderMutation,
  };
};
