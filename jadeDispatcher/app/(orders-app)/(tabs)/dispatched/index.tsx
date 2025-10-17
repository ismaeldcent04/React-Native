import { View, FlatList, Text } from "react-native";
import React, { useEffect } from "react";

import PageHeader from "@/presentation/shared/components/PageHeader";
import { useOrders } from "@/presentation/order/hooks/useOrders";
import OrderCard from "@/presentation/order/components/OrderCard";
import OrderList from "@/presentation/order/components/OrderList";

const DispatchedScreen = () => {
  const { dispatchedOrdersQuery } = useOrders();

  return (
    <View className="w-full flex-1">
      <PageHeader />

      {dispatchedOrdersQuery.data?.pages.flatMap((pages) => pages).length ===
      0 ? (
        <Text className="p-4">No hay órdenes despachadas</Text>
      ) : (
        <OrderList
          orders={
            dispatchedOrdersQuery.data?.pages.flatMap((pages) => pages) ?? []
          }
          loadNextPage={dispatchedOrdersQuery.fetchNextPage}
          isFetchingNextPage={dispatchedOrdersQuery.isFetchingNextPage}
          hasNextPage={dispatchedOrdersQuery.hasNextPage}
        />
      )}
    </View>
  );
};

export default DispatchedScreen;
