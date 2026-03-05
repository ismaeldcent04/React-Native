import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Summary } from "@/core/summary/interfaces/summary.interface";
import { Formatter } from "@/helpers/formatters/formatter";

interface Props {
  summary: Summary;
}

const DailyItem = ({ summary }: Props) => {
  return (
    <Pressable className="bg-white p-4 rounded-xl border border-gray-100 mb-3 active:scale-95">
      <View className="flex-row items-center gap-3">
        <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
          <Ionicons name="calendar" size={18} color="#6B7280" />
        </View>

        <View className="flex-1">
          <View className="flex-row justify-between">
            <Text className="text-sm font-bold">
              {Formatter.formatDate(summary.fechaFactura)}
            </Text>
            <Text className="text-sm font-extrabold">
              {Formatter.formatCurrency(summary.total)}
            </Text>
          </View>

          <View className="flex-row justify-between mt-1">
            <Text className="text-[11px] text-gray-500">
              {summary.facturas} facturas - Cerrado por {summary.usuario}
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              size={18}
              color="#D1D5DB"
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default DailyItem;
