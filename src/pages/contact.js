// Importa os componentes necessários do react-native para construir a interface do usuário.
import { Button, Text, View, TextInput, ImageBackground } from "react-native";
// Importa os estilos definidos no arquivo stylescomponent.js para estilizar o componente.
import styles from "../styles/styleforms";
// Importa o componente HeaderPrincipal para renderizar o cabeçalho da página.
import HeaderPrincipal from "../components/header";
// Importa o componente Contato para renderizar o formulário de contato.
import Contato from "../components/Contato/contactform";
// Importa o componente Rodape para renderizar o rodapé da página.
import Rodape from "../components/rodape";

// Define a função Contact que retorna a estrutura da página de contato.
function Contact() {
  return (
    // Define a estrutura da visualização da página de contato, utilizando estilos definidos.
    <View style={styles.container}>
      {/* Utiliza uma imagem de fundo para a página de contato. */}
      <ImageBackground
        style={styles.body}
        source={require("../assets/images/fundo.jpg")}
      >
        {/* Renderiza o cabeçalho da página. */}
        <HeaderPrincipal />
        {/* Define um contêiner para organizar o formulário de contato. */}
        <View style={styles.containercorpo}>
          {/* Renderiza o formulário de contato. */}
          <Contato />
        </View>
        {/* Renderiza o rodapé da página. */}
        <Rodape/>
      </ImageBackground>
    </View>
  );
}

// Exporta o componente Contact para ser utilizado em outros lugares do aplicativo.
export default Contact;
