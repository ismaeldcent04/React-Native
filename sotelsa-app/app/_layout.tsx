import { useColorScheme } from "@/presentation/theme/hooks/use-color-scheme.web";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { ActivityIndicator, View } from "react-native";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [checking, setChecking] = useState(true);
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    // Valida sesión al montar la app
    checkStatus();
    setChecking(false);
  }, []);

  if (checking || status === "checking") {
    return (
      <QueryClientProvider client={queryClient}>
        <View
          className="flex-1  justify-center items-center bg-white dark:bg-[#0A0C10]"
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#137fec" />
        </View>
      </QueryClientProvider>
    );
  }

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Slot />
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
