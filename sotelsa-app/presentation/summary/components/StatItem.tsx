import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const StatItem = ({ icon, color, label, value }: any) => {
  return (
    <View className="w-[48%] mb-4">
      <View className="flex-row items-center gap-1 mb-1">
        <Ionicons name={icon} size={16} color={color} />
        <Text className="text-xs text-gray-500">{label}</Text>
      </View>
      <Text className="text-sm font-bold dark:text-white">{value}</Text>
    </View>
  );
};

export default StatItem;
