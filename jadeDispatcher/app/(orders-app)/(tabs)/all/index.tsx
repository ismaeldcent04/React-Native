import { View, FlatList, ActivityIndicator, Text } from "react-native";
import React from "react";
import PageHeader from "@/presentation/shared/components/PageHeader";
import { useOrders } from "@/presentation/order/hooks/useOrders";
import OrderCard from "@/presentation/order/components/OrderCard";
import OrderList from "@/presentation/order/components/OrderList";

const AllScreen = () => {
  const { allOrdersQuery } = useOrders();
  return (
    <View className="w-full flex-1">
      <PageHeader />

      {allOrdersQuery.data?.pages.flatMap((pages) => pages).length === 0 ? (
        <Text className="p-4">No hay órdenes en la sucursal.</Text>
      ) : (
        <OrderList
          orders={allOrdersQuery.data?.pages.flatMap((pages) => pages) ?? []}
          loadNextPage={allOrdersQuery.fetchNextPage}
        />
      )}
    </View>
  );
};

export default AllScreen;
