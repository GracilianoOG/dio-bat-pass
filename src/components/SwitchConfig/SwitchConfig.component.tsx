import React from "react";
import { Switch, Text, View } from "react-native";

import { styles } from "./SwitchConfig.style";

export function SwitchConfig() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uppercase characters</Text>
      <Switch />
    </View>
  );
}
