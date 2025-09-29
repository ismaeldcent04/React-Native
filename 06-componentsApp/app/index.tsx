import { animationMenuRoutes } from "@/constants/Routes";
import MenuItem from "@/presentation/menu/MenuItem";
import ThemedView from "@/presentation/shared/ThemedView";
import { Href, Link } from "expo-router";
import { View, Text } from "react-native";
const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem />
      ))}
    </ThemedView>
  );
};
export default ComponentsApp;
