import { View, ActivityIndicator, Animated } from "react-native";
import React, { useState } from "react";
import { useAnimation } from "@/hooks/useAnimation";

interface Props {
  uri: string;
  className?: string;
}

const FadeInImage = ({ uri, className }: Props) => {
  const [isLoading, setIsloading] = useState(false);
  const { animatedOpacity, fadeIn } = useAnimation();
  return (
    <View className="justify-center items-center">
      {isLoading && (
        <ActivityIndicator className="absolute" color={"grey"} size={30} />
      )}
      {!isLoading && (
        <Animated.Image
          source={{ uri: uri }}
          className={`${className}`}
          style={{ opacity: animatedOpacity }}
          onLoadEnd={() => {
            fadeIn({ duration: 2000 });
            setIsloading(false);
          }}
        />
      )}
    </View>
  );
};

export default FadeInImage;
