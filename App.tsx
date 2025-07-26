import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen.component";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ConfigScreen } from "./src/screens/ConfigScreen/ConfigScreen.component";
import { OptionsProvider } from "./src/contexts/OptionsContext";
import { InfoScreen } from "./src/screens/InfoScreen/InfoScreen.component";
const { Navigator, Screen } = createBottomTabNavigator();

const sharedScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: "#E5BF3C",
  tabBarStyle: {
    backgroundColor: "black",
    borderTopWidth: 1,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    textTransform: "uppercase",
  },
};

const homeScreenOptions: BottomTabNavigationOptions = {
  tabBarLabel: "Generator",
  tabBarIcon: ({ color }) => (
    <Ionicons name="lock-open-sharp" size={24} color={color} />
  ),
};

const configScreenOptions: BottomTabNavigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ color }) => <Ionicons name="cog" size={24} color={color} />,
};

const infoScreenOptions: BottomTabNavigationOptions = {
  tabBarLabel: "Info",
  tabBarIcon: ({ color }) => (
    <Ionicons name="information-circle-sharp" size={24} color={color} />
  ),
};

export default function App() {
  return (
    <OptionsProvider>
      <NavigationContainer>
        <Navigator screenOptions={sharedScreenOptions}>
          <Screen
            name="Home"
            component={HomeScreen}
            options={homeScreenOptions}
          />
          <Screen
            name="Config"
            component={ConfigScreen}
            options={configScreenOptions}
          />
          <Screen
            name="Info"
            component={InfoScreen}
            options={infoScreenOptions}
          />
        </Navigator>
      </NavigationContainer>
    </OptionsProvider>
  );
}
