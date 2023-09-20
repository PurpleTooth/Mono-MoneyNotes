import { StyleSheet, Text, ScrollView } from "react-native";
import { Large } from "../shared/ui/TextStyles/TextStyles";
import { ButtonActive } from "../shared/ui/button/Buttons";
import { useNavigation } from "@react-navigation/native";
const PrivacyPolicy = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Large style={{ textAlign: "center" }}>
        Privacy Policy from Russia with love!!!!
      </Large>
      <ButtonActive text="Go back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
