import React from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./BatButton.style";

interface BatButtonProps {
  children: string;
  onPress: () => void;
}

const BatButton = (props: BatButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  );
};

export default BatButton;
