import { Redirect, Tabs, Href, Slot, Stack } from "expo-router";

import { Ionicons } from "@expo/vector-icons";
import {
  AuthStatus,
  useAuthStore,
} from "@/presentation/auth/store/useAuthStore";
import { useEffect } from "react";
import { ActivityIndicatorComponent, View } from "react-native";

export default function OrderAppLayout() {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  if (status === AuthStatus.checking) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicatorComponent />
      </View>
    );
  }

  if (status === AuthStatus.unauthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Slot />;
}
