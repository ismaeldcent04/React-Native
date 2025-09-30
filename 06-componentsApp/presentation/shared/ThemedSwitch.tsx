import {
  View,
  Text,
  Switch,
  SwitchProps,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import ThemedText from "./ThemedText";
import { useThemeColor } from "@/hooks/use-theme-color";

interface Props extends SwitchProps {
  text?: string;
  value: boolean;
  onValueChanged: (value: boolean) => void;
  className?: string;
}

const ThemedSwitch = ({
  text,
  value,
  onValueChanged,
  className,
  ...rest
}: Props) => {
  const isAndroid = Platform.OS === "android";
  const switchActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable
      className={`flex flex-row items-center justify-between active:opacity-80 ${className}`}
    >
      {text && <ThemedText type="h2">{text}</ThemedText>}
      <Switch
        value={value}
        onValueChange={onValueChanged}
        thumbColor={isAndroid ? switchActiveColor : ""}
        //ios_backgroundColor={value ? "green" : "red"}
        trackColor={{
          false: "grey",
          true: switchActiveColor,
        }}
        {...rest}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
