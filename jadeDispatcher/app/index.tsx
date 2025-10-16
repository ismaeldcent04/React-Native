import React from "react";
import { Redirect } from "expo-router";
import {
  useAuthStore,
  AuthStatus,
} from "@/presentation/auth/store/useAuthStore";

const Index = () => {
  const { status } = useAuthStore();

  if (status === AuthStatus.unauthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  if (status === AuthStatus.authenticated) {
    return <Redirect href="/pending" />;
  }

  // En teoría nunca se debería mostrar esto porque RootLayout maneja el checking
  return null;
};

export default Index;
