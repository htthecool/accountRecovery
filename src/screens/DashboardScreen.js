import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function DashboardScreen() {
  // you can fetch users data here
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  formContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inputContainer: {
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  actionContainer: {
    marginTop: 20,
  },
});
