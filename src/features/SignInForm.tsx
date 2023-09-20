// SignInScreen.tsx

import {
  View,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { H2, Body } from "../shared/ui/TextStyles/TextStyles";
import { ButtonActive } from "../shared/ui/button/Buttons";

const SignInForm: React.FC = () => {
  return (
    <View style={styles.main}>
      <KeyboardAvoidingView style={styles.body}>
        <View style={styles.header}>
          <H2 style={{ textAlign: "center", color: "#404040" }}>Login</H2>
        </View>
        <View style={styles.inputWrapper}>
          <Body style={{ textAlign: "left", color: "#404040" }}>
            Email Adress
          </Body>
          <View style={styles.input}>
            <Image
              style={styles.image}
              source={require("../../assets/SquaresFour.png")}
            />
            <TextInput
              placeholder="Enter Email adress"
              style={{ fontSize: 16, width: 280 }}
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Body style={{ textAlign: "left", color: "#404040" }}>
            Password
          </Body>
          <View style={styles.input}>
            <Image
              style={styles.image}
              source={require("../../assets/SquaresFour.png")}
            />
            <TextInput
              placeholder="Enter Password"
              style={{ fontSize: 16, width: 280 }}
            />
          </View>
        </View>
        <View style={styles.button}>
          <ButtonActive text="Login" />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <Pressable>
          <Body style={{ textAlign: "center", color: "#A6A6A6" }}>
            Forgot password?
          </Body>
        </Pressable>
      </View>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    paddingBottom: 24,
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: 32,
    marginTop: 152
  },
  body: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    display: "flex",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    width: 382,
    height: 48,
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 12,
  },
  image: {
    width: 24,
    height: "100%",
    marginRight: 12,
  },
  inputWrapper: {
    margin: 16,
  },
  button: {
    marginTop: 30,
  },
  footer: {
    
  }
});
