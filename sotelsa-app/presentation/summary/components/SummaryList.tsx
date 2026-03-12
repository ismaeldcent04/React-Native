import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Cuadre, Summary } from "@/core/summary/interfaces/summary.interface";
import DailyItem from "./DailyItem";
import { Link, router } from "expo-router";
import Animated, { FadeInUp } from "react-native-reanimated";
import SummaryDetail from "./SummaryDetail";

interface Props {
  summaries: Cuadre[];
  loadNextPage: () => void;
  summaryStats: Summary;
  periodoInicio: number;
  periodoFin: number;
  filtered: boolean;
}

const SummaryList = ({
  summaries,
  loadNextPage,
  summaryStats,
  periodoInicio,
  periodoFin,
  filtered,
}: Props) => {
  return (
    <FlatList
      data={summaries}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View className="px-2">
          <DailyItem summary={item} />
        </View>
      )}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 120 }}
      ListHeaderComponent={
        <View>
          <SummaryDetail
            summary={summaryStats}
            periodoInicio={periodoInicio}
            periodoFin={periodoFin}
          />

          {filtered && (
            <Text className="px-2 text-base mb-2 font-bold dark:text-white">
              Cuadres en el periodo
            </Text>
          )}
        </View>
      }
    />
  );
};

export default SummaryList;
