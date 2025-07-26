import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

import { styles } from "./SwitchConfig.style";

export function SwitchConfig() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(prevState => !prevState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uppercase characters</Text>
      <Switch
        thumbColor={isEnabled ? "#E5BF3C" : "#aba4b8"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
