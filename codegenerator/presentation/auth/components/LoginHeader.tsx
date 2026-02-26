import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const LoginHeader = () => {
  const { height } = useWindowDimensions();
  return (
    <View
      style={{
        paddingTop: height * 0.25,
      }}
      className="items-center"
    >
      <View className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20">
        <Ionicons name="key-outline" size={36} color={"#13a4ec"} />
      </View>

      <Text className="text-3xl font-bold py-4 dark:text-white">
        Bienvenido
      </Text>
      <Text className="text-base font-normal text-[#617c89] dark:text-gray-400">
        Inicia sesiòn para continuar
      </Text>
    </View>
  );
};

export default LoginHeader;
