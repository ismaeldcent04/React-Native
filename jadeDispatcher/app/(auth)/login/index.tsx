import {
  View,
  Text,
  Image,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  ActivityIndicator,
  Platform,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";

import { router } from "expo-router";
import CustomInput from "@/presentation/auth/components/login/CustomInput";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { useOrders } from "@/presentation/order/hooks/useOrders";

const LoginScreen = () => {
  const { login } = useAuthStore();
  const { pendingOrdersQuery, dispatchedOrdersQuery } = useOrders();

  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { width, height } = useWindowDimensions();

  const isDesktop = width >= 1024;

  const onLogin = async () => {
    const { username, password } = form;
    if (!username.trim() || !password.trim()) {
      if (Platform.OS !== "web")
        Alert.alert("Error", "Por favor llena todos los campos");
      else alert("Por favor llena todos los campos");

      return;
    }
    setIsPosting(true);

    const wasSuccessful = await login(username, password);

    setIsPosting(false);

    if (wasSuccessful) {
      pendingOrdersQuery.refetch();
      dispatchedOrdersQuery.refetch();
      router.replace("/pending");
    } else {
      if (Platform.OS !== "web") Alert.alert("Error", "Credenciales inválidas");
      else alert("Credenciales inválidas");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
      className="lg:mx-0"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={!isDesktop}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-[#d52041] flex flex-1 lg:items-center">
          <View className=" h-[40%] lg:h-[30%] items-center justify-center">
            <Image
              source={require("../../../assets/images/teriyaki.png")}
              className="w-4/5 h-full  lg:h-20 lg:w-20"
              resizeMode={isDesktop ? "none" : "contain"}
            />
          </View>

          <View className="bg-white rounded-t-2xl rounded-b-none h-[60%] items-center gap-10 pt-20 lg:w-[40%] lg:h-[55%] lg:rounded-b-2xl lg:justify-center lg:pt-10">
            <CustomInput
              label="Username"
              icon="person-circle-outline"
              value={form.username}
              onChangeText={(value) => setForm({ ...form, username: value })}
            />
            <CustomInput
              label="Password"
              icon="eye-outline"
              textContentType="password"
              isPassword
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
            <Pressable
              onPress={onLogin}
              disabled={isPosting}
              className="bg-[#D52041] w-4/5 h-16 rounded-xl items-center justify-center mt-4 mb-8"
            >
              <Text className="text-white font-martel-extraBold font-bold">
                Iniciar Sesión
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      {isPosting && (
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 items-center justify-center z-50">
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
