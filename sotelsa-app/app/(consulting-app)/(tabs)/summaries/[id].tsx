import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import SummaryDetail from "@/presentation/summary/components/SummaryDetail";
import { Redirect, useLocalSearchParams } from "expo-router";
import { useSummary } from "@/presentation/summary/hooks/useSummary";

const SummaryScreen = () => {
  const { id } = useLocalSearchParams();

  const { summaryQuery } = useSummary(Number(id));

  if (summaryQuery.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size={30} />
      </View>
    );
  }

  if (!summaryQuery.data) {
    return <Redirect href={"/(consulting-app)/(tabs)/summaries"} />;
  }

  return (
    <View>
      <SummaryDetail summary={summaryQuery.data} />
    </View>
  );
};

export default SummaryScreen;
