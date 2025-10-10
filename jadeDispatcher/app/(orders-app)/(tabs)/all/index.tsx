import { View, FlatList, ActivityIndicator, Text } from "react-native";
import React from "react";
import PageHeader from "@/presentation/shared/components/PageHeader";
import { useOrders } from "@/hooks/useOrders";
import OrderCard from "@/presentation/UI/components/OrderCard";

const AllScreen = () => {
  const { allOrdersQuery } = useOrders();
  return (
    <View className="w-full">
      <PageHeader />
      <View className="w-full ">
        {allOrdersQuery.data?.length === 0 ? (
          <Text className="p-4">No hay órdenes en la sucursal.</Text>
        ) : (
          <FlatList
            contentContainerStyle={{
              alignItems: "center",
              width: "100%",
              paddingBottom: 60,
            }}
            data={allOrdersQuery.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <OrderCard order={item} />}
            scrollEnabled
            ListFooterComponent={() => (
              <View className="h-[150px] justify-center">
                <ActivityIndicator size={40} />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default AllScreen;
