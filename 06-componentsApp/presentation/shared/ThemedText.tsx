import { View, Text, TextProps } from "react-native";
import React from "react";

interface Props extends TextProps {
  className?: string;
  type?: "normal" | "h1" | "h2" | "semi-bold" | "link";
}

const ThemedText = ({ className, children, type, ...rest }: Props) => {
  return (
    <Text
      {...rest}
      className={[
        "text-light-text dark:text-dark-text",
        type === "normal" ? "font-normal" : undefined,
        type === "h1" ? "text-3xl" : undefined,
        type === "h2" ? "text-xl" : undefined,
        type === "semi-bold" ? "font-semibold" : undefined,
        type === "link" ? "font-normal underline" : undefined,
        className,
      ].join(" ")}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
