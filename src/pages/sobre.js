import { View, Text, Image } from "react-native";
import HeaderPrincipal from "../components/header"; // Cabeçalho
// Importa estilos definidos externamente no arquivo stylescomponent.js
import styles from "../styles/styles";
import Rodape from "../components/rodape";

// Define a função Sobre que renderiza a página Sobre do aplicativo
function Sobre() {
  // Define a URL da imagem circular
  const imagecircular = { uri: 'https://media.istockphoto.com/id/1317323736/pt/foto/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=u92MeBnlqTibkSDqZh8J6k5ilRwS0AK9xAYqpO2gf8k=' };

  return (
    // Define a estrutura de visualização da página Sobre
    <View style={styles.container}>
      {/* Renderiza o cabeçalho da página */}
      <HeaderPrincipal/>
      <View style={styles.containercorpo}>
        {/* Texto exibido na tela com o estilo definido em styles.titulo */}
        <Text style={styles.titulo}>Sobre</Text>
        {/* Renderiza a imagem circular com o estilo definido em styles.imagecirculo */}
        <Image source={imagecircular} style={styles.imagecirculo} />
        {/* Texto exibido na tela com o estilo definido em styles.descricao */}
        <Text style={styles.descricao}>Este site é sobre florestas, essa imagem mostra uma floresta</Text>
      </View>
      {/* Renderiza o rodapé da página */}
      <Rodape/>
    </View>
  );
}

export default Sobre;
