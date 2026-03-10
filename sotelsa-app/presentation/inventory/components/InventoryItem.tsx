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
      className={`flex-row gap-4 mt-3 bg-white  p-3 rounded-xl border border-gray-100 dark:bg-[#1c2128] dark:border-gray-500 items-center lg:mb-2 ${
        inventory.cantidad <= 0 ? "opacity-70" : ""
      }`}
    >
      <View className="bg-white rounded-md p-1">
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          className="w-12 h-12 rounded-lg"
          resizeMode="cover"
        />
      </View>

      <View className="flex-1 lg:flex-row lg:items-center ">
        <Text className="text-base font-bold text-gray-900 dark:text-white lg:flex-1">
          {inventory.articulo}
        </Text>
        <Text className="text-xs text-gray-500 lg:flex-1">
          CATEGORIA: {inventory.referencia}
        </Text>

        <View className="mt-1">
          <Text
            className={`text-xs font-semibold px-2 py-1 rounded-full self-start ${statusStyles} lg:flex-1`}
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
