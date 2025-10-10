import { View, FlatList } from "react-native";
import React from "react";

import PageHeader from "@/presentation/shared/components/PageHeader";
import { useOrders } from "@/hooks/useOrders";
import OrderCard from "@/presentation/UI/components/OrderCard";

const DispatchedScreen = () => {
  const { dispatchedOrdersQuery } = useOrders();
  return (
    <View className="w-full">
      <PageHeader />
      <View className="w-full ">
        <FlatList
          contentContainerStyle={{
            alignItems: "center",
            width: "100%",
            paddingBottom: 60,
          }}
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
