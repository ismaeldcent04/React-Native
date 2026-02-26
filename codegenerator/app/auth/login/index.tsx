import {
  View,
  Text,
  KeyboardAvoidingView,
  useWindowDimensions,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput";
import LoginHeader from "@/presentation/auth/components/LoginHeader";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { router } from "expo-router";

const LoginScreen = () => {
  const { height } = useWindowDimensions();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [isPosting, setIsPosting] = useState(false);

  const { login } = useAuthStore();

  const onLogin = async () => {
    const { username, password } = form;
    setIsPosting(true);

    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Por favor llena todos los campos");
      setIsPosting(false);
      return;
    }

    const wasSuccessful = await login(username, password);
    setIsPosting(false);
    if (wasSuccessful) {
      router.replace("/(code-app)/(home)");
    } else {
      Alert.alert("Error", "Credenciales inválidas");
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" className="flex-1 px-10">
      <ScrollView>
        <LoginHeader />
        <View className="mt-10 flex w-full ">
          <ThemedTextInput
            label="Usuario"
            placeholder="Introduce tu usuario"
            autoCapitalize="none"
            value={form.username}
            onChangeText={(value) => setForm({ ...form, username: value })}
          />

          <ThemedTextInput
            label="Contraseña"
            placeholder="Introduce tu contraseña"
            secureTextEntry
            autoCapitalize="none"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <Pressable
            onPress={onLogin}
            className="flex h-16 min-w-[84px] w-full bg-primary items-center justify-center rounded-lg font-bold px-5"
          >
            <Text className="text-white text-base">Iniciar Sesion</Text>
          </Pressable>
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
