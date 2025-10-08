import { View, FlatList, ActivityIndicator } from "react-native";
import React from "react";

import PageHeader from "@/components/shared/PageHeader";
import OrderCard from "@/components/UI/OrderCard";

import { useOrders } from "@/hooks/useOrders";

const PendingScreen = () => {
  const { pendingOrdersQuery } = useOrders();
  return (
    <View className="w-full">
      <PageHeader />
      <View className="w-full ">
        <FlatList
          contentContainerStyle={{ alignItems: "center", width: "100%" }}
          data={pendingOrdersQuery.data?.filter((o) => o.orderStatus === 1)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <OrderCard order={item} />}
          scrollEnabled
          ListFooterComponent={() => (
            <View className="h-[150px] justify-center">
              <ActivityIndicator size={40} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default PendingScreen;
