import { View, Text, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PageHeader = () => {
  const safeArea = useSafeAreaInsets();
  return (
    <View className="bg-[#D52041]">
      <View
        style={{ paddingTop: safeArea.top }}
        className="flex flex-row justify-between items-center px-4 py-8"
      >
        <View className="flex text-white">
          <Text className="text-white font-martel-light font-extralight py-2">
            Sucursal
          </Text>
          <Text className="text-white font-martel-extraBold font-bold">
            JT360
          </Text>
        </View>
        <Text className="text-white">Ordénes</Text>
        <Image
          className="w-10 h-10 rounded-full "
          resizeMode="cover"
          source={{ uri: "https://i.stack.imgur.com/l60Hf.png" }}
        />
      </View>
    </View>
  );
};

export default PageHeader;
