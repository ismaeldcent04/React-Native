import { Redirect, Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../global.css";
import {
  AuthStatus,
  useAuthStore,
} from "@/presentation/auth/store/useAuthStore";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
export default function RootLayout() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Slot />
    </QueryClientProvider>
  );
}
