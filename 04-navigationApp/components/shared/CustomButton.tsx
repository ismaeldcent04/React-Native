import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";

interface Props extends PressableProps {
  children: string;
  color: "primary" | "secondary" | "tertiary";
  variant: "contained" | "text-only";
}

const CustomButton = ({
  children,
  color = "primary",
  onPress,
  onLongPress,
  variant,
}: Props) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  if (variant === "text-only") {
    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        className={`p-3 rounded-md ${btnColor} mb-10`}
      >
        <Text className="text-white text-center ">{children}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={`p-3 rounded-md bg ${btnColor} active:opacity-90`}
    >
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
