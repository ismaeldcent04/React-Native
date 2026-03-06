import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Menu,
  Plus,
  Search,
  SlidersHorizontal,
  ChevronDown,
  ReceiptText,
  Boxes,
  Wallet,
  ShoppingCart,
} from "lucide-react-native";
import { useInventory } from "@/presentation/inventory/hooks/useInventory";
import InventoryItem from "@/presentation/inventory/components/InventoryItem";
import LogoutIconButton from "@/presentation/auth/components/LogoutIconButton";
import InventoryList from "@/presentation/inventory/components/InventoryList";

export default function InventoryScreen() {
  const [productSearch, setProductSearch] = useState("");
  const { inventoryQuery, loadNexPage } = useInventory(productSearch);

  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-[#0f1115]">
      <StatusBar style="auto" />

      {/* Header */}
      <View className="flex-row items-center justify-between p-4 border-b border-gray-100 dark:bg-[#0f1115] dark:border-gray-800">
        {/* <Menu size={24} color="#111" /> */}
        <Text className="text-lg font-bold text-center flex-1 dark:text-white">
          Inventory
        </Text>
        <LogoutIconButton />
      </View>

      {/* Search */}
      <View className="p-6 bg-white dark:bg-[#1c2128] dark:border-[#1c2128] space-y-3 ">
        <View className="flex-row gap-2">
          <View className="flex-1 h-12  flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-xl px-3 ">
            <Search size={18} color="gray" />
            <TextInput
              placeholder="Search by name or SKU..."
              className="flex-1 ml-2 text-base text-black dark:text-white"
              placeholderTextColor="gray"
              value={productSearch}
              onChangeText={(value) => setProductSearch(value)}
            />
          </View>
        </View>
      </View>

      {/* List */}

      <InventoryList
        inventories={inventoryQuery.data?.pages.flatMap((page) => page) ?? []}
        loadNextPage={loadNexPage}
      />
    </SafeAreaView>
  );
}
