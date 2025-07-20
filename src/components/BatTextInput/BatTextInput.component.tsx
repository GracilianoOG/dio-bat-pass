import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./BatTextInput.style";

export const BatTextInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="pass" style={styles.input} />
    </View>
  );
};

export default BatTextInput;
