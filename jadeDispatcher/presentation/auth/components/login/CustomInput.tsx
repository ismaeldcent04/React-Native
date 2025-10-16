import { View, Text, TextInputProps, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props extends TextInputProps {
  label: string;
  icon: "person-circle-outline" | "eye-outline" | "eye-off-outline";
  isPassword?: boolean;
}

const CustomInput = ({ label, icon, isPassword = false, ...rest }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="w-[75%]">
      <Text className="font-martel-regular  text-[#970C0C]">{label}</Text>
      <TextInput
        className="border-b-2 border-[#A2A2A2] py-4 text-sm text-[#A2A2A2] lg:px-2 lg:mt-2"
        placeholder={label}
        secureTextEntry={isPassword && !showPassword}
        {...rest}
      />
      <Pressable
        className="z-10"
        onPress={() => setShowPassword((prevValue) => !prevValue)}
      >
        <Ionicons
          size={32}
          color={"#A2A2A2"}
          className="absolute right-0 bottom-4 lg:bottom-2 lg:pr-1"
          name={
            isPassword
              ? showPassword
                ? "eye-outline"
                : "eye-off-outline"
              : icon
          }
        />
      </Pressable>
    </View>
  );
};

export default CustomInput;
