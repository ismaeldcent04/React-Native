import { View, Text, ViewProps, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LatLng } from "@/infrastructure/interfaces/lat-Ing";
import MapView, { Polyline } from "react-native-maps";
import { useLocationStore } from "@/presentation/store/useLocationStore";
import FAB from "../shared/FAB";

interface Props extends ViewProps {
  initialLocation: LatLng;
  showUserLocation?: boolean;
}

const CustomMap = ({
  initialLocation,
  showUserLocation = true,
  ...rest
}: Props) => {
  const {
    watchLocation,
    clearWatchLocation,
    lastKnownLocation,
    getLocation,
    userLocationList,
  } = useLocationStore();
  const mapRef = useRef<MapView>(null);

  const [isFollowingUser, setIsFollowingUser] = useState(true);
  const [showPolyline, setShowPolyline] = useState(true);

  useEffect(() => {
    watchLocation();
    return () => {
      clearWatchLocation();
    };
  }, []);

  useEffect(() => {
    if (lastKnownLocation && isFollowingUser) {
      moveCameraToLocation(lastKnownLocation);
    }
  }, [lastKnownLocation, isFollowingUser]);

  const moveCameraToLocation = (latLng: LatLng) => {
    if (!mapRef.current) return;

    mapRef.current.animateCamera({
      center: latLng,
    });
  };

  const moveToCurrentLocation = async () => {
    if (!lastKnownLocation) {
      moveCameraToLocation(initialLocation);
    } else {
      moveCameraToLocation(lastKnownLocation);
    }

    const location = await getLocation();
    if (!location) return;

    moveCameraToLocation(location);
  };

  return (
    <View {...rest}>
      <MapView
        onTouchStart={() => setIsFollowingUser(false)}
        ref={mapRef}
        style={styles.map}
        showsUserLocation={showUserLocation}
        initialRegion={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.922,
          longitudeDelta: 0.49,
        }}
      >
        {showPolyline && (
          <Polyline
            coordinates={userLocationList}
            strokeColor="black"
            strokeWidth={5}
          />
        )}
      </MapView>

      <FAB
        onPress={() => setShowPolyline((prevValue) => !prevValue)}
        style={{ bottom: 140, right: 20 }}
        iconName={showPolyline ? "eye-outline" : "eye-off-outline"}
      />
      <FAB
        onPress={() => setIsFollowingUser((prevValue) => !prevValue)}
        style={{ bottom: 80, right: 20 }}
        iconName={isFollowingUser ? "walk-outline" : "accessibility-outline"}
      />
      <FAB
        onPress={moveToCurrentLocation}
        style={{ bottom: 20, right: 20 }}
        iconName="compass-outline"
      />
    </View>
  );
};

export default CustomMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: "100%",
    height: "100%",
    //backgroundColor: "red"
  },
});
