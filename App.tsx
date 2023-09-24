import Index from "./src/app/Index";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { usersApi } from "./src/shared/api/usersApi";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Button,
} from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store/store";
export default function App() {
  return (
    <ApiProvider api={usersApi}>
      <Provider store={store}>
        <SafeAreaView style={styles.AndroidSafeArea}>
          <Index />
        </SafeAreaView>
      </Provider>
    </ApiProvider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
