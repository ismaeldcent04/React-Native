import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { router } from "expo-router";
import CustomInput from "@/presentation/auth/components/CustomInput";

const LoginScreen = () => {
  const { login } = useAuthStore();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onLogin = async () => {
    if (form.username.length === 0 || form.password.length === 0) return;
    setIsPosting(true);

    console.log(form);

    const wasSuccessful = await login(form.username, form.password);
    setIsPosting(false);

    if (wasSuccessful) {
      router.replace("/(consulting-app)/(tabs)/summaries");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex-1  bg-white dark:bg-[#0A0C10] justify-center lg:items-center lg:w-full px-6 "
    >
      {/* Background abstract shapes */}
      {/* <LinearGradient
        colors={["#4F46E5", "transparent"]}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30"
      />
      <LinearGradient
        colors={["#06b6d4", "transparent"]}
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20"
      /> */}

      <ScrollView
        className=" lg:w-[30%]"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
      >
        {/* Glass Card */}
        <View
          className=" rounded-3xl p-8 border border-gray-300   dark:border-white/10 dark:bg-white/5 "
          style={{
            shadowColor: "#000",
            shadowOpacity: 0.4,
            shadowRadius: 20,
            shadowOffset: { width: 0, height: 10 },
            elevation: 10, // Android
          }}
        >
          {/* Logo Section */}
          <View className="items-center mb-10">
            <LinearGradient
              colors={["#4F46E5", "#06b6d4"]}
              className="w-24 h-24 rounded-3xl items-center justify-center"
            >
              <Ionicons name="layers-outline" size={40} color="white" />
            </LinearGradient>
          </View>

          {/* Title */}
          <View className="mb-10 items-center">
            <Text className="text-4xl font-extrabold dark:text-white mb-2">
              Bienvenido
            </Text>
            <Text className="text-gray-400 text-sm">
              Elevate your business management
            </Text>
          </View>

          {/* Email */}
          <View className="mb-6">
            <CustomInput
              label="Username"
              icon="person-circle-outline"
              value={form.username}
              onChangeText={(value) => setForm({ ...form, username: value })}
            />
          </View>

          {/* Password */}
          <View className="mb-6">
            <CustomInput
              label="Password"
              icon="eye-outline"
              textContentType="password"
              isPassword
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
          </View>

          {/* Button */}
          <Pressable
            onPress={onLogin}
            className="mt-4 p-2 w-full flex flex-row justify-center items-center bg-[#06b6d4] rounded-lg h-12 "
            disabled={isPosting}
          >
            <Text className="text-white font-extrabold tracking-wide">
              SIGN IN
            </Text>
            <Ionicons name="log-in-outline" size={20} color="white" />
          </Pressable>
        </View>

        {/* Footer */}
        {/* <View className="mt-10 items-center">
          <Text className="text-gray-500 text-sm">Corporate partner?</Text>
          <Pressable>
            <Text className="text-[#06b6d4] font-bold mt-1">
              Request Access
            </Text>
          </Pressable>
        </View> */}
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
