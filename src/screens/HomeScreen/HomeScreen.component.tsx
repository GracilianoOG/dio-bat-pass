import { StatusBar } from "expo-status-bar";
import styles from "./HomeScreen.style";
import BatLogo from "../../components/BatLogo/BatLogo.component";
import { BatGenerator } from "../../components/BatGenerator/BatGenerator.component";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BatLogo />
      <BatGenerator />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default HomeScreen;
