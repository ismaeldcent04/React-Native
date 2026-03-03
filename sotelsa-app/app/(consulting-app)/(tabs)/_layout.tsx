import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#D52041" }}>
      <Tabs.Screen
        name="summary/index"
        options={{
          headerShown: false,
          title: "Cuadre",
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={28}
              name="notifications-off-outline"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="inventory/index"
        options={{
          headerShown: false,
          title: "Inventario",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="alarm-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
