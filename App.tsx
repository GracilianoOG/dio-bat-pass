import { View } from "react-native";
import Home from "./src/screens/Home/Home.component";
import styles from "./src/screens/Home/Home.style";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
