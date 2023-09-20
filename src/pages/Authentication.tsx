import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignInForm from "../features/SignInForm";
import SignUpForm from "../features/SignUpForm";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
const Tab = createMaterialTopTabNavigator();

const Authentication: React.FC = () => {
  const [fontLoaded] = useFonts({
    Regular: require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarPosition="top"
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: "Regular",
            textTransform: "capitalize",
          },
          tabBarIndicatorStyle: {
            height: 1,
            backgroundColor: "#5986F2",
          },
          tabBarActiveTintColor: "#5986F2",
          tabBarInactiveTintColor: "#D9D9D9",
          tabBarItemStyle: { flex: 1 },
          tabBarPressColor: "#F6F6F6",
          tabBarPressOpacity: 0.8,
          tabBarStyle: { backgroundColor: "white" },
        }}
      >
        <Tab.Screen
          name="SignIn"
          component={SignInForm}
          options={{ tabBarLabel: "Login" }}
        />
        <Tab.Screen
          name="Signp"
          component={SignUpForm}
          options={{ tabBarLabel: "Registration" }}
        />
      </Tab.Navigator>
    );
  }
};

export default Authentication;
