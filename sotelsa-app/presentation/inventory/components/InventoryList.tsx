import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Inventory } from "@/core/inventory/interfaces/inventory.interface";
import InventoryItem from "./InventoryItem";

interface Props {
  inventories: Inventory[];
  loadNextPage: () => void;
}

const InventoryList = ({ inventories, loadNextPage }: Props) => {
  return (
    <FlatList
      data={inventories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <InventoryItem inventory={item} />}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}
    />
  );
};

export default InventoryList;
