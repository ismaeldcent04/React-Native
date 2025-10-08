import { View, FlatList, ActivityIndicator } from "react-native";
import React from "react";

import PageHeader from "@/components/shared/PageHeader";
import { useOrders } from "@/hooks/useOrders";
import OrderCard from "@/components/UI/OrderCard";

const DispatchedScreen = () => {
  const { dispatchedOrdersQuery } = useOrders();
  return (
    <View className="w-full">
      <PageHeader />
      <View className="w-full ">
        <FlatList
          contentContainerStyle={{ alignItems: "center", width: "100%" }}
          data={dispatchedOrdersQuery.data ?? []}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <OrderCard order={item} />}
          scrollEnabled
        />
      </View>
    </View>
  );
};

export default DispatchedScreen;
