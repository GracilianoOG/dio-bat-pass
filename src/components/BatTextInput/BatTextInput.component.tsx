import React from "react";
import { TextInput } from "react-native";
import { styles } from "./BatTextInput.style";

interface BatTextInputProps {
  pass: string;
}

export const BatTextInput = (props: BatTextInputProps) => {
  return (
    <TextInput
      placeholder="generate a password..."
      style={styles.input}
      value={props.pass}
    />
  );
};

export default BatTextInput;
