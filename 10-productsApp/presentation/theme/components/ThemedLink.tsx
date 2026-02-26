import { View, Text } from "react-native";
import React from "react";
import { Link, LinkProps } from "expo-router";
import { useThemeColor } from "../hooks/use-theme-color";

interface Props extends LinkProps {}

const ThemedLink = ({ style, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, "primary");
  return (
    <Link
      {...rest}
      style={[
        {
          color: primaryColor,
        },
        style,
      ]}
    />
  );
};

export default ThemedLink;
