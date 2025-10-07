import { View, FlatList, ActivityIndicator } from "react-native";
import React from "react";

import PageHeader from "@/components/shared/PageHeader";
import OrderCard from "@/components/UI/OrderCard";
import { ordersPendingAction } from "@/core/actions/orders/order-pending.actions";
import axios from "axios";

const PendingScreen = () => {
  console.log("antes");
  ordersPendingAction();
  console.log("despues");
  return (
    <View className="w-full">
      <PageHeader />
      <View className="w-full ">
        <FlatList
          contentContainerStyle={{ alignItems: "center", width: "100%" }}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <OrderCard />}
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
