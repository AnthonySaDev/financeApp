import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import { AppTabsScreen } from "./src/routes/AppTabsScreen";
import { AuthStackScreen } from "./src/routes/AuthStackScreen";
export default function App() {
  const isAuthenticated = false;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          {isAuthenticated ? <AppTabsScreen /> : <AuthStackScreen />}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
