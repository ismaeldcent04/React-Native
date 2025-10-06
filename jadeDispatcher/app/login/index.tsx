import { View, Text, Image, TextInput, Button, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomInput from "@/components/login/CustomInput";
import { router } from "expo-router";

const LoginScreen = () => {
  const safeArea = useSafeAreaInsets();
  return (
    <View className="bg-[#d52041] flex h-full">
      <View className="w-full h-[45%] items-center justify-center">
        <Image
          source={require("../../assets/images/teriyaki.png")}
          className=""
          resizeMode="cover"
        />
      </View>
      {/* <Image
        source={require("../../assets/images/teriyaki.png")}
        className="w-full h-[45%]"
        resizeMode="cover"
      /> */}
      <View className=" h-[55%] ">
        <View className="bg-white rounded-2xl h-full flex items-center gap-10 pt-20">
          <CustomInput label="Username" icon="person-circle-outline" />
          <CustomInput
            label="Password"
            icon="eye-outline"
            textContentType="password"
          />
          <Pressable
            onPress={() => router.push("/(tabs)/pending")}
            className="bg-[#D52041] w-[70%] h-16 rounded-xl items-center justify-center mt-8"
          >
            <Text className="text-white font-martel-extraBold font-bold">
              Iniciar Sesion
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
