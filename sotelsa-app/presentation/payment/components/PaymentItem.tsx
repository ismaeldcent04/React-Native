import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Payment } from "@/core/payment/interfaces/payment.interface";
import { Formatter } from "@/helpers/formatters/formatter";

interface Props {
  payment: Payment;
}

export default function PaymentItem({ payment }: Props) {
  const statusColor = payment.pagado ? "text-green-500" : "text-amber-500";

  const statusIcon = payment.pagado ? "checkmark" : "time";

  return (
    <View className="bg-white p-4 rounded-xl border border-gray-100 mb-3 flex-row justify-between items-center dark:bg-[#1c2128] dark:border-gray-500">
      {/* LEFT SIDE */}
      <View className="flex-row gap-4 flex-1">
        {/* ICON */}
        <View className="w-12 h-12 rounded-lg bg-blue-100 items-center justify-center dark:bg-blue-900">
          <Ionicons name="receipt-outline" size={22} color="#137fec" />
        </View>

        {/* TEXT CONTENT */}
        <View className="flex-1">
          {/* SERVICE */}
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="font-bold dark:text-white"
          >
            {payment.servicio}
          </Text>

          {/* NOTE */}
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-xs text-gray-500 mt-1 dark:text-gray-400"
          >
            Nota: {payment.nota}
          </Text>

          {/* DATE + AMOUNT */}
          <Text className="text-xs text-gray-400 mt-1">
            {Formatter.formatDateUpper(new Date(payment.fecha))} •{" "}
            <Text className="font-semibold text-black dark:text-white">
              {Formatter.formatCurrency(payment.monto)}
            </Text>
          </Text>
        </View>
      </View>

      {/* RIGHT SIDE */}
      <View className="items-end ml-3">
        <View className="bg-gray-100 w-6 h-6 rounded-full items-center justify-center dark:bg-gray-700">
          <Ionicons name={statusIcon} size={14} />
        </View>

        <Text className={`text-[10px] font-bold mt-1 ${statusColor}`}>
          {payment.pagado ? "PAGADO" : "PENDIENTE"}
        </Text>
      </View>
    </View>
  );
}
