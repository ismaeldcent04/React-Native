import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const DailyItem = ({ date, total, details }: any) => {
  return (
    <Pressable className="bg-white p-4 rounded-xl border border-gray-100 mb-3 active:scale-95">
      <View className="flex-row items-center gap-3">
        <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
          <Ionicons name="calendar" size={18} color="#6B7280" />
        </View>

        <View className="flex-1">
          <View className="flex-row justify-between">
            <Text className="text-sm font-bold">{date}</Text>
            <Text className="text-sm font-extrabold">{total}</Text>
          </View>

          <View className="flex-row justify-between mt-1">
            <Text className="text-[11px] text-gray-500">{details}</Text>
            <Ionicons name="search" size={18} color="#D1D5DB" />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default DailyItem;
