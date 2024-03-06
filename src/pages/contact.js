import { Button, Text, View, TextInput } from "react-native-web";
// Importa estilos definidos externamente no arquivo stylescomponent
import styles from "../styles/stylescomponent";
import HeaderPrincipal from "../components/header";
import Contato from "../components/contactform";
import Btncontato from "../components/btn_contato";


function Contact() {

   return (
      // Componente View representa um contêiner para organizar outros componentes
      <View style={styles.container}>
        <HeaderPrincipal/>
     {/* Texto exibido na tela com o estilo definido em styles.titulo */}
     <Text style={styles.titulo}>Contato</Text>
      <Contato/>
      <Btncontato/>
      </View>
        );
  }

  export default Contact;
  