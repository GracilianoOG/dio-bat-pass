import React from "react";
import { Image, Text, View } from "react-native";
import batLogo from "../../../assets/bat-logo.png";
import { styles } from "./BatLogo.style";

const BatLogo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image source={batLogo} style={styles.logo} />
    </View>
  );
};

export default BatLogo;
