import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Summary } from "@/core/summary/interfaces/summary.interface";
import DailyItem from "./DailyItem";
import { Link, router } from "expo-router";

interface Props {
  summaries: Summary[];
  loadNextPage: () => void;
}

const SummaryList = ({ summaries, loadNextPage }: Props) => {
  return (
    <FlatList
      data={summaries}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Link
          href={{
            pathname: "/(consulting-app)/(tabs)/summaries/[id]",
            params: { id: item.id },
          }}
          asChild
        >
          <DailyItem summary={item} />
        </Link>
      )}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SummaryList;
