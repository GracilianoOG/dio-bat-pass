import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./Home.style";
import BatLogo from "../../components/BatLogo/BatLogo.component";
import { BatGenerator } from "../../components/BatGenerator/BatGenerator.component";

const Home = () => {
  return (
    <View style={styles.container}>
      <BatLogo />
      <BatGenerator />
      <StatusBar style="light" />
    </View>
  );
};

export default Home;
