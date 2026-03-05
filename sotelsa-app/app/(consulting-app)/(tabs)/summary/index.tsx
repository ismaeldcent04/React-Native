import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { useSummaries } from "@/presentation/summary/hooks/useSummaries";
import SummaryList from "@/presentation/summary/components/SummaryList";
import { Formatter } from "@/helpers/formatters/formatter";
import { Button } from "@react-navigation/elements";

const SummaryScreen = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { logout } = useAuthStore();
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [filtered, setFiltered] = useState(false);

  const { summariesQuery, loadNexPage } = useSummaries(
    Formatter.formatDateToNumber(startDate),
    Formatter.formatDateToNumber(endDate),
  );

  return (
    <View className="flex-1 bg-[#f6f7f8]">
      {/* HEADER */}
      <View className="pt-16 pb-3 px-4 flex-row items-center justify-between bg-white border-b border-gray-100">
        <Text className="text-lg font-bold text-center flex-1">
          Cuadre Summary
        </Text>

        <Pressable onPress={logout}>
          <Ionicons name="log-out-outline" size={24} color={"blue"} />
        </Pressable>
      </View>

      {/* FILTER SECTION */}
      <View className="bg-white px-4 py-4 border-b border-gray-100">
        <View className="flex-row gap-3">
          <View className="flex-1">
            <Text className="text-[10px] font-bold text-gray-400 uppercase mb-1">
              Start Date
            </Text>

            <TouchableOpacity onPress={() => setShowStartDate(true)}>
              <TextInput
                placeholder="Start Date"
                editable={false}
                value={
                  startDate ? new Date(startDate).toLocaleDateString() : ""
                }
                className="bg-gray-100 rounded-xl px-3 py-2"
              />
            </TouchableOpacity>
            {showStartDate && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowStartDate(false);
                  if (selectedDate) {
                    setStartDate(selectedDate);
                  }
                }}
              />
            )}
          </View>

          <View className="flex-1">
            <Text className="text-[10px] font-bold text-gray-400 uppercase mb-1">
              End Date
            </Text>

            <Pressable
              onPress={() => {
                console.log("press");
                setShowEndDate(true);
              }}
            >
              <TextInput
                placeholder="Start Date"
                editable={false}
                value={endDate ? new Date(endDate).toLocaleDateString() : ""}
                className="bg-gray-100 rounded-xl px-3 py-2"
              />
            </Pressable>
            {showEndDate && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowEndDate(false);
                  if (selectedDate) {
                    setEndDate(selectedDate);
                  }
                }}
              />
            )}
          </View>
        </View>

        <Pressable
          onPress={() => {
            console.log(Formatter.formatDateToNumber(startDate));
            summariesQuery.refetch();
            setFiltered(true);
          }}
          className="mt-6 bg-[#137fec] py-3 rounded-xl items-center active:scale-95 "
        >
          <View className="flex-row items-center gap-2">
            <Ionicons name="filter" size={18} color="white" />
            <Text className="text-white font-bold text-sm">Apply Filter</Text>
          </View>
        </Pressable>
      </View>

      {summariesQuery.isFetching ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator />
        </View>
      ) : (
        <View className="px-4 pb-28 mt-2">
          {/* <Text className="text-sm font-bold mb-3">
              Daily Balances in Period
            </Text> */}
          <SummaryList
            summaries={summariesQuery.data?.pages.flatMap((page) => page) ?? []}
            loadNextPage={loadNexPage}
          />
        </View>
      )}
    </View>
  );
};

export default SummaryScreen;
