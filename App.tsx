import Index from "./src/app/Index";
import {SafeAreaView, StyleSheet, Platform, StatusBar, Button} from 'react-native'
export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Index />
    </SafeAreaView>
  );
}






const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});