import { View, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { Order } from "../../../infraestructure/interfaces/Order";
import OrderCard from "./OrderCard";

interface Props {
  orders: Order[];
  loadNextPage?: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
}

const OrderList = ({
  orders,
  loadNextPage,
  hasNextPage,
  isFetchingNextPage,
}: Props) => {
  console.log(orders);
  return (
    <FlatList
      contentContainerStyle={{
        alignItems: "center",
        width: "100%",
        paddingVertical: 16,
        flexGrow: 1,
      }}
      data={orders}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <OrderCard order={item} />}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={() =>
        isFetchingNextPage && (
          <View style={{ height: 150, justifyContent: "center" }}>
            <ActivityIndicator size={40} />
          </View>
        )
      }
    />
  );
};

export default OrderList;
