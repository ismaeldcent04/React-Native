import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PageHeader from "@/components/shared/PageHeader";
import OrderCard from "@/components/UI/OrderCard";

const PendingScreen = () => {
  return (
    <View className="">
      <PageHeader />
      <View className="w-full ">
        <FlatList
          contentContainerStyle={{ alignItems: "center", width: "100%" }}
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <OrderCard />}
        />
      </View>
    </View>
  );
};

export default PendingScreen;
