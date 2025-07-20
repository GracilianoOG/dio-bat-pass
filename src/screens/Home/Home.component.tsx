import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./Home.style";
import BatLogo from "../../components/BatLogo/BatLogo.component";
import BatTextInput from "../../components/BatTextInput/BatTextInput.component";

const Home = () => {
  return (
    <View style={styles.container}>
      <BatLogo />
      <BatTextInput />
      <Text>Component works!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
