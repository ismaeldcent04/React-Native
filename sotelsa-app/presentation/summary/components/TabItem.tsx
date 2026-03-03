import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const TabItem = ({ icon, label, active }: any) => {
  return (
    <View className="items-center">
      <Ionicons name={icon} size={22} color={active ? "#137fec" : "#9CA3AF"} />
      <Text
        className={`text-[10px] ${active ? "text-[#137fec]" : "text-gray-400"}`}
      >
        {label}
      </Text>
    </View>
  );
};

export default TabItem;
