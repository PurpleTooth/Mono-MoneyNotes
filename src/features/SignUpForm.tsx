import {
  View,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { H2, Body } from "../shared/ui/TextStyles/TextStyles";
import { ButtonActive } from "../shared/ui/button/Buttons";
import { useForm, Controller } from "react-hook-form";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
  Authentication: undefined;
};

type OnboardingSliderNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Authentication"
>;

interface Props {
  onSubmit: (data: FormData) => void;
}

type FormData = {
  email: string;
  password: string;
  repeatPassword: string;
};

const SignUpForm: React.FC = () => {
  const { control, handleSubmit, getValues } = useForm<FormData>();
  const navigation = useNavigation<OnboardingSliderNavigationProp>();
  const handleButtonPress = () => {
    const formData = getValues();
    console.log("Form Data:", formData);
  };

  return (
    <View style={styles.main}>
      <KeyboardAvoidingView
        style={styles.body}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.footer}>
            <View style={styles.header}>
              <H2 style={{ textAlign: "center", color: "#404040" }}>
                Registration
              </H2>
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
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Enter Email Address"
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      style={{ fontSize: 16, width: 280 }}
                    />
                  )}
                  name="email"
                  defaultValue=""
                  rules={{ required: "This field is required" }}
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
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Enter Password"
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      style={{ fontSize: 16, width: 280 }}
                      secureTextEntry
                    />
                  )}
                  name="password"
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                />
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <Body style={{ textAlign: "left", color: "#404040" }}>
                Submit Password
              </Body>
              <View style={styles.input}>
                <Image
                  style={styles.image}
                  source={require("../../assets/SquaresFour.png")}
                />
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Repeat Password"
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                      style={{ fontSize: 16, width: 280 }}
                      secureTextEntry
                    />
                  )}
                  name="repeatPassword"
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                />
              </View>
            </View>
            <View style={styles.button}>
              <ButtonActive
                text="Create account"
                onPress={handleSubmit(handleButtonPress)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <Pressable onPress={() => navigation.navigate("PrivacyPolicy")}>
          <Body style={{ textAlign: "center", color: "#A6A6A6" }}>
            Explore privacy policy
          </Body>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    paddingBottom: 24,
    paddingTop: 12,
  },
  header: {
    display: "flex",
    maxHeight: 100,
    height: "100%",
    justifyContent: "flex-end",
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
    height: 58,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
