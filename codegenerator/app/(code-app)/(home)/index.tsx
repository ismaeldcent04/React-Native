import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import MiniCodeCard from "@/presentation/code/components/MiniCodeCard";
import RecentCodesList from "@/presentation/code/components/RecentCodesList";
import LastCodeCard from "@/presentation/code/components/LastCodeCard";
import HomeHeader from "@/presentation/code/components/HomeHeader";
import GenerateCodeButton from "@/presentation/code/components/GenerateCodeButton";
import useCodes from "@/presentation/code/hooks/useCodes";
import CodeModal from "@/presentation/code/components/CodeModal";

const HomeScreen = () => {
  const { recentCodesQuery, lastCodeQuery } = useCodes();
  const [isModalVisible, setModalIsVisible] = useState(false);
  return (
    <View>
      <HomeHeader />
      <LastCodeCard code={lastCodeQuery.data ?? null} />
      <GenerateCodeButton showModal={() => setModalIsVisible(true)} />
      <RecentCodesList codes={recentCodesQuery.data ?? []} />
      <CodeModal isVisible={isModalVisible} setVisibility={setModalIsVisible} />
    </View>
  );
};

export default HomeScreen;
