import { createStackNavigator } from "@react-navigation/stack";
import { ForgotScreen } from "../screens/Auth/ForgotScreen";
import { LoginScreen } from "../screens/Auth/LoginScreen";
import { OnboardScreen } from "../screens/Auth/OnboardScreen";
import { RegisterScreen } from "../screens/Auth/RegisterScreen";

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Onboard" component={OnboardScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
    <AuthStack.Screen name="Forgot" component={ForgotScreen} />
  </AuthStack.Navigator>
);
