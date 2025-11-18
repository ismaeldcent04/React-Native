import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Redirect, Stack } from "expo-router";
import {
  AuthStatus,
  useAuthStore,
} from "@/presentation/auth/store/useAuthStore";

const CodeAppLayout = () => {
  const { status, checkStatus } = useAuthStore();

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
    return <Redirect href="/auth/login" />;
  }
  return (
    <Stack>
      <Stack.Screen
        name="(home)/index"
        options={{
          title: "Code",
        }}
      />
    </Stack>
  );
};

export default CodeAppLayout;
