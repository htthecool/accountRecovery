import React from "react";
import RecoveryScreen from "./src/screens/RecoveryScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

const Stack = createStackNavigator();

export default function NavigationRoutes({ theme }) {
  const [privateKey, setPrivateKey] = React.useState(null);
  React.useEffect(() => {
    // Check if the private key is already stored in the keychain
    Keychain.getGenericPassword({ service: KEYCHAIN_SERVICE_NAME })
      .then((credentials) => {
        if (credentials) {
          const { password } = credentials;
          setPrivateKey(password);
        }
      })
      .catch((error) =>
        console.error("Error retrieving private key from keychain:", error)
      );
  }, []);
  return (
    <View style={styles.container}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {privateKey ? (
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{ title: "Recover Account" }}
            />
          ) : (
            <Stack.Screen
              name="RecoverAccount"
              component={RecoveryScreen}
              options={{ title: "Recover Account" }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
