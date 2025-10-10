import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { router } from "expo-router";
import CustomInput from "@/presentation/auth/components/login/CustomInput";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";

const LoginScreen = () => {
  const { login } = useAuthStore();
  const safeArea = useSafeAreaInsets();
  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onLogin = async () => {
    const { username, password } = form;

    console.log(username, password);
    if (username.length === 0 || password.length === 0) {
      return;
    }
    setIsPosting(true);

    const wasSuccessful = await login(username, password);

    setIsPosting(false);

    if (wasSuccessful) {
      router.replace("/(tabs)/pending");
    } else {
      Alert.alert("Error", "Usuario o password no son correctos");
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView>
        <View className="bg-[#d52041] flex flex-1">
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
          <View className="">
            <View className="bg-white rounded-2xl h-full flex items-center gap-10 pt-20">
              <CustomInput
                label="Username"
                icon="person-circle-outline"
                onChangeText={(value) => setForm({ ...form, username: value })}
              />
              <CustomInput
                label="Password"
                icon="eye-outline"
                secureTextEntry
                textContentType="password"
                onChangeText={(value) => setForm({ ...form, password: value })}
              />
              <Pressable
                onPress={onLogin}
                disabled={isPosting}
                className="bg-[#D52041] w-[70%] h-16 rounded-xl items-center justify-center mt-8"
              >
                <Text className="text-white font-martel-extraBold font-bold">
                  Iniciar Sesion
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
