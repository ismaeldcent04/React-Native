import { View, FlatList, ActivityIndicator, Text } from "react-native";
import React from "react";

import PageHeader from "@/presentation/shared/components/PageHeader";
import OrderCard from "@/presentation/order/components/OrderCard";

import { useOrders } from "@/presentation/order/hooks/useOrders";
import OrderList from "@/presentation/order/components/OrderList";

const PendingScreen = () => {
  const { pendingOrdersQuery } = useOrders();

  return (
    <View className="w-full flex-1">
      <PageHeader />

      {pendingOrdersQuery.data?.pages.flatMap((pages) => pages).length === 0 ? (
        <Text className="p-4">No hay órdenes pendientes.</Text>
      ) : (
        <OrderList
          orders={
            pendingOrdersQuery.data?.pages.flatMap((pages) => pages) ?? []
          }
          loadNextPage={pendingOrdersQuery.fetchNextPage}
        />
      )}
    </View>
  );
};

export default PendingScreen;
