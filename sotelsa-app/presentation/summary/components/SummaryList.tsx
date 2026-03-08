import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Cuadre, Summary } from "@/core/summary/interfaces/summary.interface";
import DailyItem from "./DailyItem";
import { Link, router } from "expo-router";

interface Props {
  summaries: Cuadre[];
  loadNextPage: () => void;
}

const SummaryList = ({ summaries, loadNextPage }: Props) => {
  return (
    <FlatList
      data={summaries}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <DailyItem summary={item} />}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SummaryList;
