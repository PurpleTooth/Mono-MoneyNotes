import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

type Props = {
  children: React.ReactNode;
  style: StyleEntry;
};

type StyleEntry = {
  color?: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
};

export const Large = ({ children, style }: Props) => {
  const [fontLoaded] = useFonts({
    Bold: require("../../../../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
    return (
      <Text
        style={[
          styles.Large,
          { color: style.color, textAlign: style.textAlign },
        ]}
      >
        {children}
      </Text>
    );
  }
};

export const H1 = ({ children, style }: Props) => {
  const [fontLoaded] = useFonts({
    Bold: require("../../../../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
    return (
      <Text
        style={[styles.H1, { color: style.color, textAlign: style.textAlign }]}
      >
        {children}
      </Text>
    );
  }
};

export const H2 = ({ children, style }: Props) => {
  const [fontLoaded] = useFonts({
    Bold: require("../../../../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
    return (
      <Text
        style={[styles.H2, { color: style.color, textAlign: style.textAlign }]}
      >
        {children}
      </Text>
    );
  }
};

export const SubtitleOne = ({ children, style }: Props) => {
  const [fontLoaded] = useFonts({
    Bold: require("../../../../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
    return (
      <Text
        style={[
          styles.SubtitleOne,
          { color: style.color, textAlign: style.textAlign },
        ]}
      >
        {children}
      </Text>
    );
  }
};

export const SubtitleTwo = ({ children, style }: Props) => {
  const [fontLoaded] = useFonts({
    Bold: require("../../../../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
    return (
      <Text
        style={[
          styles.SubtitleTwo,
          { color: style.color, textAlign: style.textAlign },
        ]}
      >
        {children}
      </Text>
    );
  }
};

export const Body = ({ children, style }: Props) => {
  const [fontLoaded] = useFonts({
    Bold: require("../../../../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
    return (
      <Text
        style={[
          styles.Body,
          { color: style.color, textAlign: style.textAlign },
        ]}
      >
        {children}
      </Text>
    );
  }
};

export const Caption = ({ children, style }: Props) => {
  const [fontLoaded] = useFonts({
    Bold: require("../../../../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
    return (
      <Text
        style={[
          styles.Caption,
          { color: style.color, textAlign: style.textAlign },
        ]}
      >
        {children}
      </Text>
    );
  }
};

export const BottomBar = ({ children, style }: Props) => {
  const [fontLoaded] = useFonts({
    Bold: require("../../../../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
  });
  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
    return (
      <Text
        style={[
          styles.BottomBar,
          { color: style.color, textAlign: style.textAlign },
        ]}
      >
        {children}
      </Text>
    );
  }
};

const styles = StyleSheet.create({
  Large: {
    fontSize: 56,
    fontFamily: "Bold",
  },
  H1: {
    fontSize: 32,
    fontFamily: "Regular",
  },
  H2: {
    fontSize: 24,
    fontFamily: "Bold",
  },
  SubtitleOne: {
    fontSize: 20,
    fontFamily: "SemiBold",
  },
  SubtitleTwo: {
    fontSize: 16,
    fontFamily: "SemiBold",
  },
  Body: {
    fontSize: 16,
    fontFamily: "Regular",
  },
  Caption: {
    fontSize: 12,
    fontFamily: "Regular",
  },
  BottomBar: {
    fontSize: 10,
    fontFamily: "Regular",
  },
});
