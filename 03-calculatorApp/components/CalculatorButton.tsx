import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import * as Haptics from "expo-haptics";
interface Props extends PressableProps {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSized?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = "gray",
  blackText = false,
  onPress,
  doubleSized = false,
  ...rest
}: Props) => {
  return (
    <Pressable
      onPress={() => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        onPress();
      }}
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSized ? 180 : 80,
      })}
      {...rest}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
