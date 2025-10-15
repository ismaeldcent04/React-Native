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
      pendingOrdersQuery.refetch();
      dispatchedOrdersQuery.refetch();
      router.replace("/pending");
    } else {
      Alert.alert("Error", "Usuario o password no son correctos");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-[#d52041] flex flex-1">
          <View className="flex-[0.6] items-center justify-center">
            <Image
              source={require("../../../assets/images/teriyaki.png")}
              className="w-4/5 h-full"
              resizeMode="contain"
            />
          </View>

          <View className="bg-white rounded-t-2xl rounded-b-none  flex-[0.4] items-center gap-10 pt-20">
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
              className="bg-[#D52041] w-4/5 h-16 rounded-xl items-center justify-center mt-8"
            >
              <Text className="text-white font-martel-extraBold font-bold">
                Iniciar Sesion
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
