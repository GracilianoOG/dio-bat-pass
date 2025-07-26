import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

import { styles } from "./SwitchConfig.style";

interface SwitchConfigProps {
  title: string;
}

export function SwitchConfig({ title }: SwitchConfigProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(prevState => !prevState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch
        thumbColor={isEnabled ? "#E5BF3C" : "#aba4b8"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
