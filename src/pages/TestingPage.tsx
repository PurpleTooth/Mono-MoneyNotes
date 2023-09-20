import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { removeObject } from "../shared/functions/asyncstorage";
const TestingPage = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>testingPage</Text>
      <Button
        title="Remove"
        onPress={() => 
          removeObject("Onboarded")
          
        }
      />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TestingPage;

const styles = StyleSheet.create({});
