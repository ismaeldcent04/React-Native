import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Inventory } from "@/core/inventory/interfaces/inventory.interface";
import InventoryItem from "./InventoryItem";
import Animated, { FadeInUp } from "react-native-reanimated";

interface Props {
  inventories: Inventory[];
  loadNextPage: () => void;
}

const InventoryList = ({ inventories, loadNextPage }: Props) => {
  if (inventories.length == 0)
    return (
      <Text className="text-xs my-2 px-2 font-bold text-gray-400 uppercase lg:text-lg ">
        No data.
      </Text>
    );
  return (
    <FlatList
      data={inventories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <Animated.View entering={FadeInUp.duration(400).delay(index * 50)}>
          <InventoryItem inventory={item} />
        </Animated.View>
      )}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}
    />
  );
};

export default InventoryList;
