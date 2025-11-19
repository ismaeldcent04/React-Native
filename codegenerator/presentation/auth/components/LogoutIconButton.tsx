import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Ionicons } from "@expo/vector-icons";

const LogoutIconButton = () => {
  const { logout } = useAuthStore();
  return (
    <TouchableOpacity style={{ marginRight: 8 }} onPress={logout}>
      <Ionicons name="log-out-outline" size={24} color="#13a4ec" />
    </TouchableOpacity>
  );
};

export default LogoutIconButton;
