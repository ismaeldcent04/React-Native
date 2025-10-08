import { ordersDispatchedAction } from "@/core/actions/orders/order-dispatched.actions";
import { ordersPendingAction } from "@/core/actions/orders/order-pending.actions";
import { useQuery } from "@tanstack/react-query";

import { ordersAllAction } from "../core/actions/orders/order-all.actions";

export const useOrders = () => {
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
  return {
    pendingOrdersQuery,
    dispatchedOrdersQuery,
    allOrdersQuery,
  };
};
