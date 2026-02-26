import { View, Text, Pressable } from "react-native";
import React from "react";
import { CodeResponse } from "@/infrastructure/interfaces/codes-response";
import { Formatter } from "@/helpers/formatters/formatter";

interface Props {
  code: CodeResponse;
}

const MiniCodeCard = ({ code }: Props) => {
  return (
    <View className="flex flex-row justify-between items-center rounded-lg bg-white dark:bg-black/20 p-4 shadow-[0_0_4px_rgba(0,0,0,0.05)] dark:shadow-none mt-4">
      <View>
        <Text className="my-2 text-lg font-bold leading-tight tracking-[-0.015em] text-black dark:text-white">
          {code.valor}
        </Text>
        <Text className="text-base font-normal leading-normal text-gray-500 dark:text-gray-400">
          {Formatter.dataDate(code.fecha)}
        </Text>
      </View>
      <Pressable className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20">
        <Text className="text-primary text-sm font-medium leading-normal">
          Copiar
        </Text>
      </Pressable>
    </View>
  );
};

export default MiniCodeCard;
