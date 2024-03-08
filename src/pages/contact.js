import { Button, Text, View, TextInput, ImageBackground } from "react-native";
// Importa estilos definidos externamente no arquivo stylescomponent
import styles from "../styles/styleforms";
import HeaderPrincipal from "../components/header";
import Contato from "../components/Contato/contactform";
import Rodape from "../components/rodape";

function Contact() {
  return (
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.container}>
      <ImageBackground
        style={styles.body}
        source={require("../assets/images/fundo.jpg")}
      >
        <HeaderPrincipal />
        <View style={styles.containercorpo}>
        <Contato />
        </View>
        <Rodape/>
      </ImageBackground>
    </View>
  );
}

export default Contact;
