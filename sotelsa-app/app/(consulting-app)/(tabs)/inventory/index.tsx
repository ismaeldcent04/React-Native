import React from "react";
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

const inventoryData = [
  {
    id: "1",
    name: "Ergonomic Office Chair",
    sku: "OC-2023",
    stock: 45,
    status: "in",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzMjDUSF-1eJBxVCM2xUZKndm7RC7tAFriDDZTy9LgdjZ2gsJaLeDZ7UPi41S04zPc2ELohi_e1J6AwK9MKGjXq2Fkjfq6hi3tc8HtXvUsJdmxsDdODYdiOyTe-QW5POPh2yaXavag0pPa54GD1ER0YK4wkukYqxPYkgaJ0DhUndbou48MBNtf2Du7vvd2zvTK-ADuwFWzwJCvYh7XkM0WNgFxz1zP9xGRrKa2ETMFuz4YScnSJW5FIjZxN_BQ53bEpgz0mH7B42s",
  },
  {
    id: "2",
    name: "Minimalist LED Lamp",
    sku: "LP-99-W",
    stock: 5,
    status: "low",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFPZvpjgY8Hc4isNREMi_nSVgmZZCZE5iUZwQBsVwukTcSyLcwLPf5rU3ZWyN0YLB9UiOTdBHrsD1ne_s4srjHG2jd6RHttxyI-6kg5aGTFYRMxEIiNwf1JFJ-OLlFbc2VCwAcXaFW04R7djXk8Uda1s-Lym-TuIMPj6guk0JxWohuo5bpw5HQ7L6HImrth6IJFasqXb96MiExqCPiyAltEfZRZZuf13FXX86VJd2VK2R0Grk0_NZQNOj3JuxGXjC4n1c2c8tuDBg",
  },
  {
    id: "3",
    name: "HP Ink Cartridge (Black)",
    sku: "IC-HP-01",
    stock: 0,
    status: "out",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjFRzeUSjhmGvkUubvO8_1h7uYhlqe0soeCnlsBhL4INBEORgj-AU-RY1ISm4n5yW0HZICntJc_NifF-nRki2vWT40ma36Wbg55gNlEYcWGTJCS6TZRQdL7LDVUy1CZTSmFZ3zRrEHY8oH0a90QBJl7IrmVRoZ4qMOQNh16PotaieN5ZekSAGX3HiUsTtQgqeF1nobbbfNt0Nkg2kTO5fyMPkY3ZMGmZy4NK1uxX2l3WyCNyMkD5LLPUaAk7xQxSAzfLOXnEgg91k",
  },
];

export default function InventoryScreen() {
  const renderItem = ({ item }: any) => {
    const statusStyles =
      item.status === "in"
        ? "bg-green-100 text-green-700"
        : item.status === "low"
          ? "bg-orange-100 text-orange-700"
          : "bg-red-100 text-red-700";

    const dotColor =
      item.status === "in"
        ? "bg-green-500"
        : item.status === "low"
          ? "bg-orange-500"
          : "bg-red-500";

    return (
      <View
        className={`flex-row gap-4 bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800 items-center ${
          item.status === "out" ? "opacity-70" : ""
        }`}
      >
        <Image
          source={{ uri: item.image }}
          className="w-16 h-16 rounded-lg"
          resizeMode="cover"
        />

        <View className="flex-1">
          <Text className="text-base font-bold text-gray-900 dark:text-white">
            {item.name}
          </Text>
          <Text className="text-xs text-gray-500">SKU: {item.sku}</Text>

          <View className="mt-1">
            <Text
              className={`text-xs font-semibold px-2 py-1 rounded-full self-start ${statusStyles}`}
            >
              {item.stock > 0 ? `${item.stock} in stock` : "Out of stock"}
            </Text>
          </View>
        </View>

        <View className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-[#101922]">
      <StatusBar style="auto" />

      {/* Header */}
      <View className="flex-row items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#101922]">
        {/* <Menu size={24} color="#111" /> */}
        <Text className="text-lg font-bold text-center flex-1 dark:text-white">
          Inventory
        </Text>
        <TouchableOpacity className="bg-blue-100 p-2 rounded-lg">
          <Plus size={20} color="#137fec" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View className="p-4 bg-white dark:bg-[#101922] space-y-3">
        <View className="flex-row gap-2">
          <View className="flex-1 flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-xl px-3">
            <Search size={18} color="gray" />
            <TextInput
              placeholder="Search by name or SKU..."
              className="flex-1 ml-2 text-base text-black dark:text-white"
              placeholderTextColor="gray"
            />
          </View>
        </View>
      </View>

      {/* List */}
      <FlatList
        data={inventoryData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, gap: 8 }}
      />
    </SafeAreaView>
  );
}
