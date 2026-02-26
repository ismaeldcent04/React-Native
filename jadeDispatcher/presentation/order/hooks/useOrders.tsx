import { ordersDispatchedAction } from "@/core/actions/orders/order-dispatched.actions";
import { ordersPendingAction } from "@/core/actions/orders/order-pending.actions";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { ordersNoNotifiedAction } from "../../../core/actions/orders/order-notNotified.actions";
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

  const notNotifiedOrdersQuery = useInfiniteQuery({
    queryKey: ["orders", "notNotified"],
    queryFn: ({ pageParam = 1 }) => ordersNoNotifiedAction(10, pageParam),
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
      await updateOrderAction(data.oid, 2);

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

      queryClient.invalidateQueries({
        queryKey: ["orders", "notNotified"],
      });
    },
  });

  const softDeleteOrderMutation = useMutation({
    mutationFn: async (id: number) => {
      await updateOrderAction(id, 3);
    },

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["orders", "pending"],
      });
    },
  });

  const updateOrderMutation = useMutation({
    mutationFn: async (id: number) => {
      await updateOrderAction(id, 2);
    },

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["orders", "notNotified"],
      });
    },
  });

  return {
    pendingOrdersQuery,
    dispatchedOrdersQuery,
    notNotifiedOrdersQuery,
    upsertOrderMutation,
    softDeleteOrderMutation,
    updateOrderMutation,
  };
};
