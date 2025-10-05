import { View, Text, TextInputProps, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props extends TextInputProps {
  label: string;
  icon: "person-circle-outline" | "eye-outline" | "eye-off-outline";
}

const CustomInput = ({ label, icon, ...rest }: Props) => {
  return (
    <View className="w-[70%]">
      <Text className="font-martel-regular  text-[#970C0C]">{label}</Text>
      <TextInput
        className="border-b-2 border-[#A2A2A2] py-4 text-sm text-[#A2A2A2]"
        placeholder={label}
        {...rest}
      />
      <Ionicons
        size={28}
        color={"#A2A2A2"}
        className="absolute right-0 bottom-4"
        name={icon}
      />
    </View>
  );
};

export default CustomInput;
