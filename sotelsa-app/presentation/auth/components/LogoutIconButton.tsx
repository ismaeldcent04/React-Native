import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Ionicons } from "@expo/vector-icons";

const LogoutIconButton = () => {
  const { logout } = useAuthStore();

  return (
    <TouchableOpacity onPress={logout} className="lg:mr-6">
      <Ionicons name="log-out-outline" size={24} color={"red"} />
    </TouchableOpacity>
  );
};

export default LogoutIconButton;
