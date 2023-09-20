import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Onboarding from "../processes/onboarding/Onboarding";
import TestingPage from "../pages/TestingPage";
import Authentication from "../pages/Authentication";

import { createStackNavigator } from "@react-navigation/stack";
export const Index = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="TestingPage" component={TestingPage} />
        <Stack.Screen name="Authentication" component={Authentication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
