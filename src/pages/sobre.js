import { View, Text, Image } from "react-native";
import HeaderPrincipal from "../components/header";
// Importa estilos definidos externamente no arquivo stylescomponent
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";
import Rodape from "../components/rodape";


function Sobre() {

  const imagecircular = { uri: 'https://media.istockphoto.com/id/1317323736/pt/foto/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=u92MeBnlqTibkSDqZh8J6k5ilRwS0AK9xAYqpO2gf8k=' }

  return (

  
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.container}>
        <HeaderPrincipal/>

      {/* Texto exibido na tela com o estilo definido em styles.titulo */}
      <Text style={styles.titulo}>Sobre</Text>

      <Image source={imagecircular} style={styles.imagecirculo} />

      <Text style={styles.descricao}>Este site é sobre florestas, essa imagem mostra uma floresta</Text>
     
    <Rodape/>
    </View>
    
  );
}

export default Sobre;