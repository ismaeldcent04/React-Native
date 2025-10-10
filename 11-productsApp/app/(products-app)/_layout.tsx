import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import {
  AuthStatus,
  useAuthStore,
} from "@/presentation/auth/store/useAuthStore";
import { Redirect, Stack } from "expo-router";

const ProductsAppLayout = () => {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {}, []);

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
          title: "Productos",
        }}
      />
    </Stack>
  );
};

export default ProductsAppLayout;
