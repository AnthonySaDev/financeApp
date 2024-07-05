import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/App/HomeScreen";

const AppTabs = createBottomTabNavigator();
export const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen name="Home" component={HomeScreen} />
  </AppTabs.Navigator>
);
