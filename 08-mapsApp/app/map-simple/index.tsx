import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        //provider="google"
        initialRegion={{
          latitude: 18.4834,
          longitude: -69.9131,
          latitudeDelta: 0.922,
          longitudeDelta: 0.49,
        }}
      >
        <Marker
          coordinate={{
            latitude: 18.4834,
            longitude: -69.9131,
          }}
          title="Here I AM"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

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
