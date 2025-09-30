import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import MenuItem from "@/presentation/menu/MenuItem";
import ThemedView from "@/presentation/shared/ThemedView";
import { View } from "react-native";

const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}

      <View className="my-5" />
      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}

      <View className="my-5" />
      {menuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}
    </ThemedView>
  );
};
export default ComponentsApp;
