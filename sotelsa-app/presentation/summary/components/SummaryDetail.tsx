import { View, Text } from "react-native";
import React from "react";
import StatItem from "./StatItem";
import { Ionicons } from "@expo/vector-icons";
import { Inventory } from "@/core/inventory/interfaces/inventory.interface";
import { Formatter } from "@/helpers/formatters/formatter";
import { Summary } from "@/core/summary/interfaces/summary.interface";

interface Props {
  summary: Summary;
}

const SummaryDetail = ({ summary }: Props) => {
  return (
    <View className="p-4">
      <View className="bg-white rounded-2xl p-6 border border-gray-100">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-xs font-bold text-gray-400 uppercase">
              Total Facturado
            </Text>
            <Text className="text-3xl font-extrabold text-[#137fec]">
              {Formatter.formatCurrency(summary.facturado)}
            </Text>
            <Text className="text-[10px] text-gray-400 mt-1">
              Period: {Formatter.formatDate(summary.fechaFactura)}
            </Text>
          </View>

          <View className="items-end">
            <Text className="text-[10px] font-bold text-gray-400 uppercase">
              Cant. Facturas
            </Text>
            <Text className="text-lg font-bold">{summary.facturas}</Text>
          </View>
        </View>

        <View className="h-px bg-gray-100 my-4" />

        <View className="flex-row flex-wrap justify-between">
          <StatItem
            icon="payments"
            color="#078838"
            label="Efectivo"
            value={Formatter.formatCurrency(summary.efectivo)}
          />
          <StatItem
            icon="credit-card"
            color="#137fec"
            label="Tarjeta"
            value={Formatter.formatCurrency(summary.tarjeta)}
          />
          <StatItem
            icon="account-balance"
            color="#9333EA"
            label="Transferencia"
            value={Formatter.formatCurrency(summary.tranferencia)}
          />
          <StatItem
            icon="pending-actions"
            color="#d32f2f"
            label="Pendiente"
            value={Formatter.formatCurrency(summary.pendiente)}
          />
        </View>

        <View className="border-t border-gray-100 mt-4 pt-4 flex-row justify-between items-center">
          <View className="flex-row items-center gap-1">
            <Ionicons name="cash-outline" size={16} color="#f97316" />
            <Text className="text-xs text-gray-500">Descuento Total</Text>
          </View>

          <Text className="text-sm font-bold text-orange-500">
            -{Formatter.formatCurrency(summary.descuento)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SummaryDetail;
