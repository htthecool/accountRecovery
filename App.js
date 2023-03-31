import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import NavigationRoutes from "./NavigationRoutes";
import "@ethersproject/shims";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F65CE1",
    secondary: "#01F9FF",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider theme={theme}>
        <NavigationRoutes theme={theme} />
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
