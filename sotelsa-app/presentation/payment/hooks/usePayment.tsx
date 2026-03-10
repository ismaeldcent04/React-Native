import { View, Text } from "react-native";
import React from "react";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPayments } from "@/core/payment/actions/get-payments.actions";

const usePayment = (service: string) => {
  const { user } = useAuthStore();

  console.log(user);
  const paymentQuery = useInfiniteQuery({
    queryKey: ["payment", "infinite", service],
    queryFn: ({ pageParam = 1 }) =>
      getPayments(10, pageParam, Number(user?.client), service),
    staleTime: 1000 * 60 * 60,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < 10) return undefined;
      return allPages.length + 1;
    },
  });

  return {
    paymentQuery,
  };
};

export default usePayment;
