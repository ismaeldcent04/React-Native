import { View, Text, TextInput, ActivityIndicator } from "react-native";
import LogoutIconButton from "@/presentation/auth/components/LogoutIconButton";
import { Search } from "lucide-react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PaymentList from "@/presentation/payment/components/PaymentList";
import usePayment from "@/presentation/payment/hooks/usePayment";

export default function PaymentsScreen() {
  const [productSearch, setProductSearch] = useState("");
  const { paymentQuery } = usePayment(productSearch);
  return (
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-[#0f1115]">
      {/* HEADER */}
      <View className="flex-row items-center justify-between p-4 border-b border-gray-100 dark:bg-[#0f1115] dark:border-gray-800">
        <Text className="text-lg font-bold text-center flex-1 dark:text-white">
          Pagos
        </Text>
        <LogoutIconButton />
      </View>

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

      {paymentQuery.isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
        </View>
      ) : (
        <View className="px-4 pt-3">
          <PaymentList
            payments={paymentQuery.data?.pages.flatMap((pages) => pages) ?? []}
            loadNextPage={paymentQuery.fetchNextPage}
          />
        </View>
      )}

      {/* LIST */}
    </SafeAreaView>
  );
}
