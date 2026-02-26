import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CodeResponse } from "@/infrastructure/interfaces/codes-response";

interface Props {
  code: CodeResponse | null;
}

const LastCodeCard = ({ code }: Props) => {
  console.log(code);
  return (
    <View className="relative w-[85%] my-8 p-6 mx-auto flex flex-row justify-between rounded-xl bg-white dark:bg-black/20 shadow-lg shadow-gray-200/50 dark:shadow-black/20">
      <View className="flex gap-y-2">
        {code ? (
          <>
            <Text className="font-semibold text-base">
              Tu último código es:
            </Text>
            <Text className="text-3xl font-bold text-primary">
              {code.valor}
            </Text>
            <Text>Toca el código para copiar </Text>
          </>
        ) : (
          <Text className="font-semibold text-base">
            No se ha generado codigo
          </Text>
        )}
      </View>

      <Pressable className="absolute bottom-4 right-6 flex flex-col h-12 w-12  cursor-pointer items-center justify-center  rounded-full bg-primary/20 text-primary justify-self-end">
        <Ionicons name="copy-outline" size={20} color={"#13a4ec"} />
      </Pressable>
    </View>
  );
};

export default LastCodeCard;
