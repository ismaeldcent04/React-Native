import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Platform } from "react-native";
import {
  useAuthStore,
  AuthStatus,
} from "@/presentation/auth/store/useAuthStore";
import "../global.css";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function RootLayout() {
  const { status, checkStatus } = useAuthStore();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Valida sesión al montar la app
    const validate = async () => {
      await checkStatus();
      setChecking(false);
    };
    validate();
  }, []);

  if (checking || status === AuthStatus.checking) {
    return (
      <QueryClientProvider client={queryClient}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#D52041" />
        </View>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}
