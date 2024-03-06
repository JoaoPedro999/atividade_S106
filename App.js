// Importa o componente StatusBar da biblioteca Expo para controlar a barra de status do aplicativo.
import { StatusBar } from "expo-status-bar";
// Importa os componentes View, Text e Button da biblioteca react-native para construir a interface do usuário.
import { View, Text, Button } from "react-native";
// Importa os componentes NavigationContainer e useNavigation da biblioteca @react-navigation/native para configurar a navegação entre telas.
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// Importa a função createNativeStackNavigator da biblioteca @react-navigation/native-stack para criar um navegador de pilha nativo.
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa os componentes de páginas do aplicativo.
import Home from "./src/pages/home";
import Sobre from "./src/pages/sobre";
import Contact from "./src/pages/contact";
import Login from "./src/pages/login";

// Cria uma instância do navegador de pilha usando createNativeStackNavigator.
const Stack = createNativeStackNavigator();

// Define o componente principal do aplicativo.
export default function App() {
  return (
    // Componente NavigationContainer envolve a navegação do aplicativo.
    <NavigationContainer>
      {/* Navigator contém as telas do aplicativo, cada uma com um nome e um componente associado. */}
      <Stack.Navigator>
        {/* Define a tela inicial do aplicativo, 'Home', e especifica que o cabeçalho não deve ser mostrado. */}
        <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
        {/* Define a tela 'Sobre' e especifica que o cabeçalho não deve ser mostrado. */}
        <Stack.Screen name="Sobre" component={Sobre} options={{headerShown: false,}}/>
        {/* Define a tela 'Contact' e especifica que o cabeçalho não deve ser mostrado. */}
        <Stack.Screen name="Contact" component={Contact} options={{headerShown: false,}}/>
        {/* Define a tela 'Login' e especifica que o cabeçalho não deve ser mostrado. */}
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
