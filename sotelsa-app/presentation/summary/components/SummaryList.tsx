import { View, Text, FlatList } from "react-native";
import React from "react";
import { Summary } from "@/core/summary/interfaces/summary.interface";
import DailyItem from "./DailyItem";

interface Props {
  summaries: Summary[];
  loadNextPage: () => void;
}

const SummaryList = ({ summaries, loadNextPage }: Props) => {
  return (
    <FlatList
      data={summaries}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <DailyItem summary={item} />}
    />
  );
};

export default SummaryList;
