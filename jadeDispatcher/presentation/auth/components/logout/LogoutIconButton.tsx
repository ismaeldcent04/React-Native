import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const LogoutIconButton = () => {
  const { logout } = useAuthStore();

  const onLogout = () => {
    router.replace("/login");
    logout();
  };
  return (
    <TouchableOpacity className="mr-2" onPress={onLogout}>
      <Ionicons name="log-out-outline" size={30} color={"white"} />
    </TouchableOpacity>
  );
};

export default LogoutIconButton;
