import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import React from "react";
import { ThemedText } from "@/presentation/theme/components/themed-text";
import StatItem from "@/presentation/summary/components/StatItem";
import { Ionicons } from "@expo/vector-icons";
import DailyItem from "@/presentation/summary/components/DailyItem";
import TabItem from "@/presentation/summary/components/TabItem";

const SummaryScreen = () => {
  return (
    <View className="flex-1 bg-[#f6f7f8]">
      {/* HEADER */}
      <View className="pt-12 pb-3 px-4 flex-row items-center justify-between bg-white border-b border-gray-100">
        <Ionicons name="wallet" size={24} color="#111418" />

        <Text className="text-lg font-bold text-center flex-1">
          Cuadre Summary
        </Text>

        <Pressable>
          <Ionicons name="calendar-outline" size={24} color="#111418" />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* FILTER SECTION */}
        <View className="bg-white px-4 py-4 border-b border-gray-100">
          <View className="flex-row gap-3">
            <View className="flex-1">
              <Text className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                Start Date
              </Text>
              <View className="bg-gray-100 rounded-xl px-3 py-2">
                <TextInput
                  placeholder="2023-10-01"
                  className="text-sm font-medium"
                />
              </View>
            </View>

            <View className="flex-1">
              <Text className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                End Date
              </Text>
              <View className="bg-gray-100 rounded-xl px-3 py-2">
                <TextInput
                  placeholder="2023-10-24"
                  className="text-sm font-medium"
                />
              </View>
            </View>
          </View>

          <Pressable className="mt-3 bg-[#137fec] py-3 rounded-xl items-center active:scale-95">
            <View className="flex-row items-center gap-2">
              <Ionicons name="filter" size={18} color="white" />
              <Text className="text-white font-bold text-sm">Apply Filter</Text>
            </View>
          </Pressable>
        </View>

        {/* SUMMARY CARD */}
        <View className="p-4">
          <View className="bg-white rounded-2xl p-6 border border-gray-100">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-xs font-bold text-gray-400 uppercase">
                  Total Facturado
                </Text>
                <Text className="text-3xl font-extrabold text-[#137fec]">
                  $12,450.00
                </Text>
                <Text className="text-[10px] text-gray-400 mt-1">
                  Period: Oct 01 - Oct 24
                </Text>
              </View>

              <View className="items-end">
                <Text className="text-[10px] font-bold text-gray-400 uppercase">
                  Cant. Facturas
                </Text>
                <Text className="text-lg font-bold">104</Text>
              </View>
            </View>

            <View className="h-px bg-gray-100 my-4" />

            {/* GRID */}
            <View className="flex-row flex-wrap justify-between">
              <StatItem
                icon="payments"
                color="#078838"
                label="Efectivo"
                value="$5,250.00"
              />
              <StatItem
                icon="credit-card"
                color="#137fec"
                label="Tarjeta"
                value="$4,380.50"
              />
              <StatItem
                icon="account-balance"
                color="#9333EA"
                label="Transferencia"
                value="$2,819.50"
              />
              <StatItem
                icon="pending-actions"
                color="#d32f2f"
                label="Pendiente"
                value="$845.00"
              />
            </View>

            <View className="border-t border-gray-100 mt-4 pt-4 flex-row justify-between items-center">
              <View className="flex-row items-center gap-1">
                <Ionicons name="cash-outline" size={16} color="#f97316" />
                <Text className="text-xs text-gray-500">Descuento Total</Text>
              </View>

              <Text className="text-sm font-bold text-orange-500">
                -$215.00
              </Text>
            </View>
          </View>
        </View>

        {/* DAILY LIST */}
        <View className="px-4 pb-28">
          <Text className="text-sm font-bold mb-3">
            Daily Balances in Period
          </Text>

          <DailyItem
            date="Oct 23, 2023"
            total="$3,120.00"
            details="28 Invoices • Closed by Admin"
          />
          <DailyItem
            date="Oct 22, 2023"
            total="$2,450.15"
            details="21 Invoices • Closed by Cashier"
          />
          <DailyItem
            date="Oct 21, 2023"
            total="$2,980.00"
            details="26 Invoices • Closed by Admin"
          />
        </View>
      </ScrollView>

      {/* FLOATING BUTTON */}
      <Pressable className="absolute bottom-24 right-6 bg-[#137fec] px-5 py-3 rounded-full shadow-lg active:scale-95">
        <View className="flex-row items-center gap-2">
          <Ionicons name="add" size={22} color="white" />
          <Text className="text-white font-bold">New Cuadre</Text>
        </View>
      </Pressable>

      {/* BOTTOM TAB */}
      {/* <View className="absolute bottom-0 w-full bg-white border-t border-gray-200 flex-row justify-around py-3">
        <TabItem icon="home" label="Home" active={false} />
        <TabItem icon="account-balance-wallet" label="Cuadre" active />
        <TabItem icon="description" label="Invoices" active={false} />
        <TabItem icon="inventory-2" label="Inventory" active={false} />
      </View> */}
    </View>
  );
};

export default SummaryScreen;
