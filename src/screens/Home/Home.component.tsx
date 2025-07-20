import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./Home.style";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Component works!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
