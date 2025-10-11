import { View, Text, ActivityIndicatorComponent } from "react-native";
import React, { useEffect } from "react";
import {
  AuthStatus,
  useAuthStore,
} from "@/presentation/auth/store/useAuthStore";
import { Redirect } from "expo-router";

const Index = () => {
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
    return <Redirect href="/login" />;
  }

  return <Redirect href="/pending" />;
};

export default Index;
