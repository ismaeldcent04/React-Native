import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const LogoutIconButton = () => {
  const { logout } = useAuthStore();

  return (
    <TouchableOpacity className="mr-2" onPress={logout}>
      <Ionicons name="log-out-outline" size={30} color={"white"} />
    </TouchableOpacity>
  );
};

export default LogoutIconButton;
