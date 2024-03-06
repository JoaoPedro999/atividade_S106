// Importa as bibliotecas necessárias do React e do React Native
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";

// Importa estilos definidos externamente no arquivo stylescomponent
import styles from "../styles/stylescomponent";

// Importa os componentes personalizados do seu aplicativo
import ComponentForm from "../components/component_form";
import Componentbtn from "../components/component_btn";
import Componentimg from "../components/component_img";
import ImageBackgroundComponent from "../components/ImageBackgroundComponent";

// Função principal do aplicativo
export default function App() {

  // Função btn() é chamada quando o botão é pressionado, exibindo um alerta simples
  btn = () => {
    alert("Logado com Sucesso");
  };

  return (
    // Componente View representa o contêiner principal do aplicativo com o estilo definido em styles.container
    <View style={styles.container}>
     <ImageBackgroundComponent/>
      {/* Componente StatusBar controla a barra de status do dispositivo */}
      <StatusBar style="auto" />
    </View>
  );
}
