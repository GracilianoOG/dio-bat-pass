import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./Home.style";
import BatLogo from "../../components/BatLogo/BatLogo.component";
import BatTextInput from "../../components/BatTextInput/BatTextInput.component";
import BatButton from "../../components/BatButton/BatButton.component";

const Home = () => {
  return (
    <View style={styles.container}>
      <BatLogo />
      <View style={styles.generatorContainer}>
        <BatTextInput />
        <BatButton onPress={() => console.log("Generate password")}>
          GENERATE
        </BatButton>
        <BatButton onPress={() => console.log("Copy text")}>⚡ COPY</BatButton>
      </View>
      <Text>Component works!</Text>
      <StatusBar style="light" />
    </View>
  );
};

export default Home;
