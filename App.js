import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/home";
import Sobre from "./src/pages/sobre";
import Contact from "./src/pages/contact";
import Login from "./src/pages/login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
        <Stack.Screen name="Sobre" component={Sobre} options={{headerShown: false,}}/>
        <Stack.Screen name="Contact" component={Contact} options={{headerShown: false,}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

