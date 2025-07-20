import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./Home.style";
import BatLogo from "../../components/BatLogo/BatLogo.component";

const Home = () => {
  return (
    <View style={styles.container}>
      <BatLogo />
      <Text>Component works!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
