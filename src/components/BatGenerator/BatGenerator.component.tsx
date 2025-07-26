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
  const optionsContext = useContext(OptionsContext);

  if (!optionsContext) {
    throw new Error("OptionsContext is undefined!");
  }

  const { options } = optionsContext;

  const handlePasswordGeneration = () => {
    const generatedToken = generatePassword(options);
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
