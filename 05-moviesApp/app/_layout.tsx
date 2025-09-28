import { View, Text } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  const client = new QueryClient();

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={client}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
