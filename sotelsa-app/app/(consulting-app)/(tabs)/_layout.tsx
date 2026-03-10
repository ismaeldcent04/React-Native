import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "#137fec", headerShown: false }}
    >
      <Tabs.Screen
        name="summaries/index"
        options={{
          headerShown: false,
          title: "Cuadre",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="calendar-number-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inventory/index"
        options={{
          headerShown: false,
          title: "Inventario",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="bag-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payments/index"
        options={{
          headerShown: false,
          title: "Pagos",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="pricetag" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
