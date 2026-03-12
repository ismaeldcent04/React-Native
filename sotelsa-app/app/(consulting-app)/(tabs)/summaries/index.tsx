import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { useSummaries } from "@/presentation/summary/hooks/useSummaries";
import SummaryList from "@/presentation/summary/components/SummaryList";
import { Formatter } from "@/helpers/formatters/formatter";
import { Button } from "@react-navigation/elements";
import * as DateInputWeb from "@/presentation/summary/components/DateInput.web";
import * as DateInputMovil from "@/presentation/summary/components/DateInput.native";
import LogoutIconButton from "@/presentation/auth/components/LogoutIconButton";
import StatItem from "@/presentation/summary/components/StatItem";
import SummaryDetail from "@/presentation/summary/components/SummaryDetail";
import Animated, { FadeInDown } from "react-native-reanimated";

const SummariesScreen = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filtered, setFiltered] = useState(false);

  const { summariesQuery, loadNexPage } = useSummaries(
    Formatter.formatDateToNumber(startDate),
    Formatter.formatDateToNumber(endDate),
  );

  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;

  return (
    <View className="flex-1  bg-[#f6f7f8]  dark:bg-[#0f1115] ">
      {/* HEADER */}
      <View className="pt-16 pb-3 px-4 flex-row items-center justify-between bg-white border-b border-gray-100 dark:bg-[#0f1115] dark:border-gray-800 lg:pt-4">
        <Text className="text-lg font-bold text-center flex-1 dark:text-white">
          Cuadre
        </Text>

        <LogoutIconButton />
      </View>

      {/* FILTER SECTION */}
      <View className="bg-white px-4 pt-4 pb-8 border-b border-gray-100 lg:flex-row lg:justify-center lg:items-center dark:bg-[#1c2128] dark:border-[#1c2128] ">
        <View className="flex-row gap-3">
          {Platform.OS === "web" ? (
            <>
              <DateInputWeb.default
                label="Start Date"
                value={startDate}
                onChange={setStartDate}
              />
              <DateInputWeb.default
                label="End Date"
                value={endDate}
                onChange={setEndDate}
              />
            </>
          ) : (
            <>
              <DateInputMovil.default
                label="Start Date"
                value={startDate}
                onChange={setStartDate}
              />
              <DateInputMovil.default
                label="End Date"
                value={endDate}
                onChange={setEndDate}
              />
            </>
          )}
        </View>

        <Pressable
          onPress={() => {
            console.log(Formatter.formatDateToNumber(startDate));
            summariesQuery.refetch();
            setFiltered(true);
          }}
          className="mt-6 bg-[#137fec] py-3 rounded-xl items-center active:scale-95 lg:w-36 lg:ml-3"
        >
          <View className="flex-row items-center gap-2">
            <Ionicons name="filter" size={18} color="white" />
            <Text className="text-white font-bold text-sm">Buscar cuadres</Text>
          </View>
        </Pressable>
      </View>

      {!summariesQuery.isFetching && (
        <Animated.View entering={FadeInDown.duration(400)}>
          <SummaryDetail
            summary={
              summariesQuery.data?.pages[0] ?? {
                cuadres: [],
                totalDescuento: 0,
                totalEfectivo: 0,
                totalFacturado: 0,
                totalFacturas: 0,
                totalPendiente: 0,
                totalTarjeta: 0,
                totalTransferencia: 0,
              }
            }
            periodoInicio={Formatter.formatDateToNumber(startDate)}
            periodoFin={Formatter.formatDateToNumber(endDate)}
          />
        </Animated.View>
      )}

      {summariesQuery.isFetching ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
        </View>
      ) : (
        <View className="px-2  flex-1 lg:my-2">
          <View className="flex-1">
            {filtered && (
              <Text className="text-base mb-1 font-bold dark:text-white ">
                Cuadres en el periodo
              </Text>
            )}

            <SummaryList
              summaries={
                summariesQuery.data?.pages.flatMap((page) => page.cuadres) ?? []
              }
              loadNextPage={loadNexPage}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default SummariesScreen;
