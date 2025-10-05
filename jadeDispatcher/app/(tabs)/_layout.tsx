import { Tabs } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="all"
        options={{
          headerShown: false,
          title: "All",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person-add-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pending"
        options={{
          headerShown: false,
          title: "Pending",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person-add-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dispatched"
        options={{
          headerShown: false,
          title: "Dispatched",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person-add-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
