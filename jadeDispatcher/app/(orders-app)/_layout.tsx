import {
  AuthStatus,
  useAuthStore,
} from "@/presentation/auth/store/useAuthStore";
import { Tabs, Slot, Redirect } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function OrderAppLayout() {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    checkStatus(); // Verifica el token en almacenamiento
  }, []);

  if (status === AuthStatus.checking) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#D52041" />
      </View>
    );
  }

  // 👇 Aquí controlamos la sesión cada vez que cambia el estado
  if (status === AuthStatus.unauthenticated) {
    return <Redirect href="/(auth)/login" />;
  }
  return <Slot />;
}
