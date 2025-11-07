import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import CustomMap from "@/presentation/components/maps/CustomMap";
import { useLocationStore } from "@/presentation/store/useLocationStore";

const MapScreen = () => {
  const { lastKnownLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnownLocation === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <CustomMap initialLocation={lastKnownLocation} />
    </View>
  );
};

export default MapScreen;
