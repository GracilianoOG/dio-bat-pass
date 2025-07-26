import { useContext, useState } from "react";
import { View } from "react-native";
import { styles } from "./BatGenerator.style";
import BatTextInput from "../BatTextInput/BatTextInput.component";
import BatButton from "../BatButton/BatButton.component";
import * as Clipboard from "expo-clipboard";
import generatePassword from "../../services/passwordService";
import { OptionsContext } from "../../contexts/OptionsContext";

export function BatGenerator() {
  const [pass, setPass] = useState("");
  const options = useContext(OptionsContext);

  const handlePasswordGeneration = () => {
    const generatedToken = generatePassword(options?.options);
    setPass(generatedToken);
  };

  const handleCopy = async () => {
    await Clipboard.setStringAsync(pass);
  };

  return (
    <View style={styles.container}>
      <BatTextInput pass={pass} />
      <BatButton onPress={handlePasswordGeneration}>GENERATE</BatButton>
      <BatButton onPress={handleCopy}>⚡ COPY</BatButton>
    </View>
  );
}
