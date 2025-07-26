import { Switch, Text, View } from "react-native";

import { styles } from "./SwitchConfig.style";

interface SwitchConfigProps {
  title: string;
  isSwitched: boolean;
  toggleSwitch: () => void;
}

export function SwitchConfig({
  title,
  isSwitched,
  toggleSwitch,
}: SwitchConfigProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch
        thumbColor={isSwitched ? "#E5BF3C" : "#aba4b8"}
        onValueChange={toggleSwitch}
        value={isSwitched}
      />
    </View>
  );
}
