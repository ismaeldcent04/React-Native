import { View, Text, Pressable } from "react-native";
import React from "react";
import { ThemedText } from "@/presentation/components/shared/themed-text";
import { usePermissionsStore } from "@/presentation/store/usePermissions";
import ThemedPressable from "@/presentation/components/shared/ThemedPressable";

const PermissionScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionsStore();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedPressable onPress={requestLocationPermission}>
        Enable location
      </ThemedPressable>
      <ThemedText>Current state: {locationStatus}</ThemedText>
    </View>
  );
};

export default PermissionScreen;
