import React, { useContext } from "react";
import { Switch, Text, View } from "react-native";
import { styles } from "./ConfigScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwitchConfig } from "../../components/SwitchConfig/SwitchConfig.component";
import { OptionsContext } from "../../contexts/OptionsContext";

export function ConfigScreen() {
  const optionsContext = useContext(OptionsContext);

  if (!optionsContext) {
    throw new Error("OptionsContext is undefined!");
  }

  const { options, setOptions } = optionsContext;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Settings</Text>
      <View style={styles.options}>
        <SwitchConfig
          title="Uppercase characters"
          isSwitched={options.uppercase}
          toggleSwitch={() =>
            setOptions(prev => ({ ...prev, uppercase: !options.uppercase }))
          }
        />
        <SwitchConfig
          title="Lowercase characters"
          isSwitched={options.lowercase}
          toggleSwitch={() =>
            setOptions(prev => ({
              ...prev,
              lowercase: !options.lowercase,
            }))
          }
        />
        <SwitchConfig
          title="Numeric characters"
          isSwitched={options.numeric}
          toggleSwitch={() =>
            setOptions(prev => ({
              ...prev,
              numeric: !options.numeric,
            }))
          }
        />
        <SwitchConfig
          title="Special characters"
          isSwitched={options.special}
          toggleSwitch={() =>
            setOptions(prev => ({
              ...prev,
              special: !options.special,
            }))
          }
        />
      </View>
    </SafeAreaView>
  );
}
