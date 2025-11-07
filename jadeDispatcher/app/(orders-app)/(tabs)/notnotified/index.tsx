import { View, Text } from "react-native";
import React from "react";
import PageHeader from "@/presentation/shared/components/PageHeader";
import { useOrders } from "@/presentation/order/hooks/useOrders";
import OrderList from "@/presentation/order/components/OrderList";

const NotNotifiedScreen = () => {
  const { notNotifiedOrdersQuery } = useOrders();
  return (
    <View className="w-full flex-1">
      <PageHeader />

      {notNotifiedOrdersQuery.data?.pages.flatMap((pages) => pages).length ===
      0 ? (
        <Text className="p-4">No hay órdenes sin notificar pendientes.</Text>
      ) : (
        <OrderList
          orders={
            notNotifiedOrdersQuery.data?.pages.flatMap((pages) => pages) ?? []
          }
          loadNextPage={notNotifiedOrdersQuery.fetchNextPage}
          hasNextPage={notNotifiedOrdersQuery.hasNextPage}
          isFetchingNextPage={notNotifiedOrdersQuery.isFetchingNextPage}
        />
      )}
    </View>
  );
};

export default NotNotifiedScreen;
