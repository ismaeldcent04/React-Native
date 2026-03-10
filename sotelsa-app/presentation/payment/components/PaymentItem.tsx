import { View, Text, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Payment } from "@/core/payment/interfaces/payment.interface";
import { Formatter } from "@/helpers/formatters/formatter";

interface Props {
  payment: Payment;
}

export default function PaymentItem({ payment }: Props) {
  const fechaActual = new Date();
  const statusColor = payment.pagado
    ? "text-emerald-500"
    : new Date(payment.fecha) < fechaActual
      ? "text-red-500"
      : "text-amber-500";

  const iconColor = payment.pagado
    ? "#10B981"
    : new Date(payment.fecha) < fechaActual
      ? "#EF4444"
      : "#F59E0B";

  const iconBgColor = payment.pagado
    ? "bg-emerald-500/20"
    : new Date(payment.fecha) < fechaActual
      ? "bg-red-500/20"
      : "bg-amber-500/20";

  console.log(fechaActual);

  const statusIcon = payment.pagado
    ? "checkmark"
    : new Date(payment.fecha) < fechaActual
      ? "warning-outline"
      : "time";

  const { width } = useWindowDimensions();

  return (
    <View className="bg-white p-4 rounded-xl border border-gray-100 mb-3 flex-row justify-between items-center dark:bg-[#1c2128] dark:border-gray-500">
      {/* LEFT SIDE */}
      <View className="flex-row gap-4 flex-1 text-red">
        {/* ICON */}
        <View className="w-12 h-12 rounded-lg bg-blue-100 items-center justify-center dark:bg-blue-900">
          <Ionicons name="receipt-outline" size={22} color="#137fec" />
        </View>

        {/* TEXT CONTENT */}
        <View className="flex-1 lg:flex-row lg:items-center lg:justify-around">
          {/* SERVICE */}
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="font-bold dark:text-white lg:flex-1 lg:text-lg"
          >
            {payment.servicio}
          </Text>

          {/* NOTE */}
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-xs text-gray-500 mt-1 dark:text-gray-400  lg:flex-1 lg:text-base"
          >
            Nota: {payment.nota ? payment.nota : "N/A"}
          </Text>

          {/* DATE + AMOUNT */}
          <Text className="text-xs text-gray-400 mt-1  lg:flex-1 lg:text-base">
            {Formatter.formatDateUpper(new Date(payment.fecha))} •{" "}
            <Text className="font-semibold text-black dark:text-white  lg:flex-1">
              {Formatter.formatCurrency(payment.monto)}
            </Text>
          </Text>
        </View>
      </View>

      {/* RIGHT SIDE */}
      <View className="items-end ml-3">
        <View
          className={`w-6 h-6 rounded-full items-center justify-center lg:w-10 lg:h-10  ${iconBgColor}`}
        >
          <Ionicons
            name={statusIcon}
            size={width >= 1024 ? 28 : 14}
            color={iconColor}
          />
        </View>

        <Text
          className={`text-[10px] font-bold mt-1 ${statusColor} lg:text-sm`}
        >
          {payment.pagado
            ? "PAGADO"
            : new Date(payment.fecha) < fechaActual
              ? "ATRASADO"
              : "PENDIENTE"}
        </Text>
      </View>
    </View>
  );
}
