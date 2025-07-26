import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home/Home.component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ConfigScreen } from "./src/screens/ConfigScreen/ConfigScreen.component";
import { OptionsProvider } from "./src/contexts/OptionsContext";

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  return (
    <OptionsProvider>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#E5BF3C",
            tabBarStyle: {
              backgroundColor: "black",
              borderTopWidth: 1,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              textTransform: "uppercase",
            },
          }}
        >
          <Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" size={24} color={color} />
              ),
            }}
          ></Screen>
          <Screen
            name="Config"
            component={ConfigScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="cog" size={24} color={color} />
              ),
            }}
          ></Screen>
        </Navigator>
      </NavigationContainer>
    </OptionsProvider>
  );
}
