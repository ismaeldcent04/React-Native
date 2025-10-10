import { Tabs } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#D52041" }}>
      <Tabs.Screen
        name="pending/index"
        options={{
          headerShown: false,
          title: "Pending",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="alarm-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dispatched/index"
        options={{
          headerShown: false,
          title: "Dispatched",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="checkmark-circle-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="all/index"
        options={{
          headerShown: false,
          title: "All",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="infinite-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
