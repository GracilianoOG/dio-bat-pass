import React from "react";
import { TextInput } from "react-native";
import { styles } from "./BatTextInput.style";

export const BatTextInput = () => {
  return <TextInput placeholder="pass" style={styles.input} />;
};

export default BatTextInput;
