import { View, Text, FlatList } from "react-native";
import React from "react";
import MiniCodeCard from "./MiniCodeCard";
import { CodeResponse } from "../../../infrastructure/interfaces/codes-response";

interface Props {
  codes: CodeResponse[];
}

const RecentCodesList = ({ codes }: Props) => {
  return (
    <View className="mx-auto my-10 w-[85%]">
      <Text className="text-black dark:text-white text-[16px] font-bold">
        Códigos Recientes
      </Text>

      <FlatList
        data={codes}
        keyExtractor={(item) => item.oid.toString()}
        renderItem={({ item }) => <MiniCodeCard code={item} />}
        scrollEnabled={false}
      />
    </View>
  );
};

export default RecentCodesList;
