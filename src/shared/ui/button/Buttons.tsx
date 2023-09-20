import { StyleSheet, Pressable, Text } from "react-native";
import { useFonts } from "expo-font";

import IButton from "./IButton";
import * as SplashScreen from "expo-splash-screen";

export const ButtonRemove = ({ text, disabled, onPress }: IButton) => {
  const [fontLoaded] = useFonts({
    Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
    return (
      <Pressable
        style={[styles.button, { backgroundColor: "#FE7474" }]}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
};

export const ButtonActive = ({ text, disabled, onPress }: IButton) => {
  const [fontLoaded] = useFonts({
    Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
    return (
      <Pressable
        style={[styles.button, { backgroundColor: "#5986F2" }]}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    width: 380,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#FCFCFC",
    fontFamily: "Regular",
    fontSize: 16,
  },
});
