import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Cuadre, Summary } from "@/core/summary/interfaces/summary.interface";
import DailyItem from "./DailyItem";
import { Link, router } from "expo-router";
import Animated, { FadeInUp } from "react-native-reanimated";

interface Props {
  summaries: Cuadre[];
  loadNextPage: () => void;
}

const SummaryList = ({ summaries, loadNextPage }: Props) => {
  if (summaries.length == 0)
    return (
      <Text className="text-xs px-2 font-bold text-gray-400 uppercase lg:text-lg ">
        No data.
      </Text>
    );
  return (
    <FlatList
      data={summaries}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Animated.View entering={FadeInUp.duration(400).delay(index * 50)}>
          <DailyItem summary={item} />
        </Animated.View>
      )}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SummaryList;
