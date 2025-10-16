import { Redirect, Tabs } from "expo-router";

import { Ionicons } from "@expo/vector-icons";
import {
  AuthStatus,
  useAuthStore,
} from "@/presentation/auth/store/useAuthStore";
import { useEffect } from "react";
import { ActivityIndicatorComponent, View } from "react-native";

export default function OrderTabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#D52041" }}>
      <Tabs.Screen
        name="pending/index"
        options={{
          headerShown: false,
          title: "Pendientes",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="alarm-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dispatched/index"
        options={{
          headerShown: false,
          title: "Despachadas",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="checkmark-circle-outline" color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="all/index"
        options={{
          headerShown: false,
          title: "Todas",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="infinite-outline" color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}
