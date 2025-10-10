import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { Redirect } from "expo-router";
import { QueryClient } from "@tanstack/react-query";
import {
  AuthStatus,
  useAuthStore,
} from "@/presentation/auth/store/useAuthStore";

const HomeScreen = () => {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    console.log(status);
    checkStatus();
  }, []);

  if (status === AuthStatus.checking) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (status === AuthStatus.unauthenticated) {
    return <Redirect href="/login" />;
  }
  return (
    <View>
      <Redirect href={"/(tabs)/pending"} />
    </View>
  );
};

export default HomeScreen;
