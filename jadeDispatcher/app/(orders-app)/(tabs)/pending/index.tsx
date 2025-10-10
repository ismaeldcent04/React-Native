import { View, FlatList, ActivityIndicator, Text } from "react-native";
import React from "react";

import PageHeader from "@/presentation/shared/components/PageHeader";
import OrderCard from "@/presentation/UI/components/OrderCard";

import { useOrders } from "@/hooks/useOrders";

const PendingScreen = () => {
  const { pendingOrdersQuery } = useOrders();

  const orders = pendingOrdersQuery.data?.filter((o) => o.orderStatus === 1);
  return (
    <View className="w-full">
      <PageHeader />
      <View className="w-full ">
        {orders?.length === 0 ? (
          <Text className="p-4">No hay órdenes pendientes.</Text>
        ) : (
          <FlatList
            contentContainerStyle={{
              alignItems: "center",
              width: "100%",
              paddingBottom: 60,
            }}
            data={orders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <OrderCard order={item} />}
            scrollEnabled
          />
        )}
      </View>
    </View>
  );
};

export default PendingScreen;
