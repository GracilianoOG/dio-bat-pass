import React from "react";
import { Switch, Text, View } from "react-native";
import { styles } from "./ConfigScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";

export function ConfigScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Settings</Text>
      <View
        style={{
          width: "100%",
        }}
      >
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#fff", textTransform: "uppercase" }}>
            Uppercase characters
          </Text>
          <Switch />
        </View>
      </View>
    </SafeAreaView>
  );
}
