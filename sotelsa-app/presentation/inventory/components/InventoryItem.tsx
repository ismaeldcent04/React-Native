import { View, Text, Image } from "react-native";
import React from "react";
import { Inventory } from "@/core/inventory/interfaces/inventory.interface";

interface Props {
  inventory: Inventory;
}

const InventoryItem = ({ inventory }: Props) => {
  const statusStyles =
    inventory.cantidad > 10
      ? "bg-green-100 text-green-700"
      : inventory.cantidad < 5
        ? "bg-orange-100 text-orange-700"
        : "bg-red-100 text-red-700";

  const dotColor =
    inventory.cantidad > 10
      ? "bg-green-500"
      : inventory.cantidad < 5
        ? "bg-orange-500"
        : "bg-red-500";

  return (
    <View
      className={`flex-row gap-4 bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800 items-center ${
        inventory.cantidad <= 0 ? "opacity-70" : ""
      }`}
    >
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1170/1170628.png",
        }}
        className="w-16 h-16 rounded-lg"
        resizeMode="cover"
      />

      <View className="flex-1">
        <Text className="text-base font-bold text-gray-900 dark:text-white">
          {inventory.articulo}
        </Text>
        <Text className="text-xs text-gray-500">
          SKU: {inventory.referencia}
        </Text>

        <View className="mt-1">
          <Text
            className={`text-xs font-semibold px-2 py-1 rounded-full self-start ${statusStyles}`}
          >
            {inventory.cantidad > 0
              ? `${inventory.cantidad} in stock`
              : "Out of stock"}
          </Text>
        </View>
      </View>

      <View className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
    </View>
  );
};

export default InventoryItem;
