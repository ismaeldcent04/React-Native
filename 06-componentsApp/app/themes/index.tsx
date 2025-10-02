import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";

import { useColorScheme } from "nativewind";
import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";

const ThemesScreen = () => {
  const { toogleTheme, currentTheme, setSystemTheme } =
    useThemeChangerContext();
  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    //setColorScheme(value ? "dark" : "light");
    toogleTheme();
    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setDarkModeSettings({
        darkMode: darkModeSettings.darkMode,
        systemMode: value,
      });
      setSystemTheme();
    }
  };
  return (
    <ThemedView margin>
      <ThemedCard>
        <ThemedSwitch
          text="Dark Mode"
          className="mb-5"
          value={darkModeSettings.darkMode}
          onValueChanged={setDarkMode}
        />
        <ThemedSwitch
          text="System Mode"
          className="mb-5"
          value={darkModeSettings.systemMode}
          onValueChanged={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
