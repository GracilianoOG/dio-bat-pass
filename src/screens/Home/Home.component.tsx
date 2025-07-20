import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./Home.style";
import BatLogo from "../../components/BatLogo/BatLogo.component";
import BatTextInput from "../../components/BatTextInput/BatTextInput.component";
import BatButton from "../../components/BatButton/BatButton.component";
import { useState } from "react";
import generatePassword from "../../services/passwordService";

const Home = () => {
  const [pass, setPass] = useState("");

  const handlePasswordGeneration = () => {
    const generatedToken = generatePassword();
    setPass(generatedToken);
  };

  return (
    <View style={styles.container}>
      <BatLogo />
      <View style={styles.generatorContainer}>
        <BatTextInput pass={pass} />
        <BatButton onPress={handlePasswordGeneration}>GENERATE</BatButton>
        <BatButton onPress={() => console.log("Copy text")}>⚡ COPY</BatButton>
      </View>
      <Text>Component works!</Text>
      <StatusBar style="light" />
    </View>
  );
};

export default Home;
