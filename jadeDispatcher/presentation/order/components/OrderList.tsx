import { View, Text, FlatList } from "react-native";
import React from "react";
import { Order } from "../../../infraestructure/interfaces/Order";
import OrderCard from "./OrderCard";

interface Props {
  orders: Order[];
  loadNextPage?: () => void;
}

const OrderList = ({ orders, loadNextPage }: Props) => {
  console.log(orders);
  return (
    <FlatList
      contentContainerStyle={{
        alignItems: "center",
        width: "100%",
      }}
      data={orders}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <OrderCard order={item} />}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default OrderList;
