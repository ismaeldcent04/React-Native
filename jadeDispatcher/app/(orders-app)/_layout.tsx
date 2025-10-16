import { Redirect, Tabs, Href, Slot, Stack } from "expo-router";

import { Ionicons } from "@expo/vector-icons";
import {
  AuthStatus,
  useAuthStore,
} from "@/presentation/auth/store/useAuthStore";
import { useEffect } from "react";
import {
  ActivityIndicator,
  ActivityIndicatorComponent,
  View,
} from "react-native";

export default function OrderAppLayout() {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  if (status === AuthStatus.checking) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"#D52041"} />
      </View>
    );
  }

  if (status === AuthStatus.unauthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Slot />;
}
