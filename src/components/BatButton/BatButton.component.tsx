import React from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./BatButton.style";

const BatButton = () => {
  return (
    <>
      <Pressable style={styles.button} onPress={() => console.log("hello")}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => console.log("hello")}>
        <Text style={styles.text}>🦇 COPY</Text>
      </Pressable>
    </>
  );
};

export default BatButton;
