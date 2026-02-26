import { View, Text, TextInputProps } from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useThemeColor } from "../hooks/use-theme-color";

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  label?: string;
}

const ThemedTextInput = ({ icon, label, ...rest }: Props) => {
  const inputRef = useRef<TextInput>(null);
  return (
    <View className="mb-6" onTouchStart={() => inputRef.current?.focus()}>
      <Text className="text-sm font-medium text-[#111618] dark:text-gray-300 pb-2">
        {label}
      </Text>
      <TextInput
        {...rest}
        ref={inputRef}
        className="flex w-full rounded-lg border border-[#dbe2e6] bg-white  placeholder:text-[#617c89]  h-14 p-3 text-base font-normal focus:border-primary "
      />
    </View>
  );
};

export default ThemedTextInput;
