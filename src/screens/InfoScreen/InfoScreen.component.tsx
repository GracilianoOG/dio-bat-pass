import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./InfoScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";

export function InfoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.photo}
        source={{
          uri: "https://avatars.githubusercontent.com/u/72778164?s=250&v=4",
        }}
      />
      <Text style={styles.title}>Developed by Gabriel</Text>
      <View style={styles.techList}>
        <Text style={styles.tech}>React Native</Text>
        <Text style={styles.tech}>TypeScript</Text>
        <Text style={styles.tech}>Expo</Text>
      </View>
    </SafeAreaView>
  );
}
