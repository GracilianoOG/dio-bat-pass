import { View } from "react-native";
import Home from "./src/screens/Home";
import styles from "./src/screens/Style";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
