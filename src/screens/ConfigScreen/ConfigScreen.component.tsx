import React from "react";
import { Text, View } from "react-native";
import { styles } from "./ConfigScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";

export function ConfigScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Settings</Text>
    </SafeAreaView>
  );
}
