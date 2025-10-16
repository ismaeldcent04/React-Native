import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import LogoutIconButton from "@/presentation/auth/components/logout/LogoutIconButton";

const PageHeader = () => {
  const safeArea = useSafeAreaInsets();
  const { username } = useAuthStore();
  useEffect(() => {});
  return (
    <View className="bg-[#D52041]">
      <View
        style={{ paddingTop: safeArea.top }}
        className="flex flex-row justify-between items-center px-4 py-8 lg:h-24 lg:py-0"
      >
        <View className="flex text-white">
          <Text className="text-white font-martel-light font-extralight py-2 lg:text-xl">
            Sucursal
          </Text>
          <Text className="text-white font-martel-extraBold font-bold lg:text-xl">
            {username}
          </Text>
        </View>
        <Text className="text-white lg:text-2xl">Órdenes</Text>
        {/* <Image
          className="w-10 h-10 rounded-full "
          resizeMode="cover"
          source={{ uri: "https://i.stack.imgur.com/l60Hf.png" }}
        /> */}
        <LogoutIconButton />
      </View>
    </View>
  );
};

export default PageHeader;
