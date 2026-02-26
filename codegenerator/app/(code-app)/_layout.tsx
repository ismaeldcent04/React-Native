import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import {
  AuthStatus,
  useAuthStore,
} from "@/presentation/auth/store/useAuthStore";
import { Redirect, Stack } from "expo-router";
import LogoutIconButton from "@/presentation/auth/components/LogoutIconButton";
import { Ionicons } from "@expo/vector-icons";

const CodesAppLayout = () => {
  const { status, checkStatus } = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

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
          title: "Code Generator",
          headerRight: () => <LogoutIconButton />,
          headerLeft: () => (
            <Ionicons name="shield-half-outline" size={25} color={"#13a4ec"} />
          ),
        }}
      />
    </Stack>
  );
};

export default CodesAppLayout;
