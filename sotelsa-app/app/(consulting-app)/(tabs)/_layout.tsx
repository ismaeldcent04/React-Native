import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "#D52041", headerShown: false }}
    >
      <Tabs.Screen
        name="summaries"
        options={{
          headerShown: false,
          title: "Cuadre",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="calendar-number-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          headerShown: false,
          title: "Inventario",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="bag-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="summaries/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
