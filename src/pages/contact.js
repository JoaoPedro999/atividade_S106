import { Button, Text, View, TextInput, ImageBackground } from "react-native-web";
// Importa estilos definidos externamente no arquivo stylescomponent
import styles from "../styles/styleforms";
import HeaderPrincipal from "../components/header";
import Contato from "../components/Contato/contactform";

function Contact() {
  return (
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.container}>
      <ImageBackground
        style={styles.body}
        source={require("../assets/images/fundo.jpg")}
      >
        <HeaderPrincipal />
        <Contato />
      </ImageBackground>
    </View>
  );
}

export default Contact;
