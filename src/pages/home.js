// Importa os componentes necessários do react-native para construir a interface do usuário.
import { View, ImageBackground } from "react-native";
// Importa os estilos definidos no arquivo stylescomponent.js para estilizar o componente.
import styles from "../styles/styles";
// Importa o componente HeaderPrincipal para renderizar o cabeçalho da página.
import HeaderPrincipal from "../components/header";
// Importa o componente Rodape para renderizar o rodapé da página.
import Rodape from "../components/rodape";
// Importa o componente ContainerHome para renderizar o conteúdo principal da página de home.
import ContainerHome from "../components/Home/corpohome";

// Define a função Home que retorna a estrutura da página de home.
function Home() {
  return (
    // Define a estrutura da visualização da página de home, utilizando estilos definidos.
    <View style={styles.container}>
      {/* Utiliza uma imagem de fundo para a página de home. */}
      <ImageBackground source={require('../assets/images/fundohome.jpg')} style={styles.body} >
        {/* Renderiza o cabeçalho da página. */}
        <HeaderPrincipal/>
        {/* Renderiza o conteúdo principal da página de home. */}
        <ContainerHome/>
        {/* Renderiza o rodapé da página. */}
        <Rodape/>
      </ImageBackground>
    </View>
  );
}

// Exporta o componente Home para ser utilizado em outros lugares do aplicativo.
export default Home;
