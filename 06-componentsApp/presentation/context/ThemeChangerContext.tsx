import { View, Text } from "react-native";
import React, { createContext, PropsWithChildren, useContext } from "react";

interface ThemeChangerContextType {
  currentTheme: "light" | "dark";
  isSystemTheme: boolean;

  toogleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

export const useThemeChangerContext = () => {
  const themeChanger = useContext(ThemeChangerContext);

  return themeChanger;
};

export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeChangerContext.Provider
      value={{
        currentTheme: "light",
        isSystemTheme: false,
        setSystemTheme: async () => {},
        toogleTheme: async () => {},
      }}
    >
      {children}
    </ThemeChangerContext.Provider>
  );
};
