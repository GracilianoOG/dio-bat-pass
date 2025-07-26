import React from "react";
import { Switch, Text, View } from "react-native";
import { styles } from "./ConfigScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwitchConfig } from "../../components/SwitchConfig/SwitchConfig.component";

export function ConfigScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Settings</Text>
      <View
        style={{
          width: "100%",
        }}
      >
        <SwitchConfig />
      </View>
    </SafeAreaView>
  );
}
