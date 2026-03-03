import { View, Text } from "react-native";
import React from "react";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { Redirect } from "expo-router";

const Index = () => {
  const { status } = useAuthStore();

  if (status === "unauthenticated") {
    return <Redirect href="/(auth)/login" />;
  }

  if (status === "authenticated") {
    return <Redirect href="/(consulting-app)/(tabs)/summary" />;
  }

  // En teoría nunca se debería mostrar esto porque RootLayout maneja el checking
  return null;
};

export default Index;
