import { View, StatusBar } from "react-native";

import React from "react";
import { Slot } from "expo-router";

import { globalStyles } from "@/styles/global-styles";
import * as NavigationBar from "expo-navigation-bar";

NavigationBar.setBackgroundColorAsync("black");
const RootLayout = () => {
  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar />
    </View>
  );
};

export default RootLayout;
