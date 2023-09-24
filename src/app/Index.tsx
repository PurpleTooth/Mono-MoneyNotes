import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../processes/onboarding/Onboarding";
import Authentication from "../pages/Authentication";
import PrivacyPolicy from "../pages/PrivacyPolicy";

import { createStackNavigator } from "@react-navigation/stack";
export const Index = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
