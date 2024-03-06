import { View, Text, Image } from "react-native";
import HeaderPrincipal from "../components/header";
// Importa estilos definidos externamente no arquivo stylescomponent
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";



function Sobre() {

  const imagecircular = { uri: 'https://wallpapercave.com/wp/wp3219866.jpg' }

  return (

  
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.container}>
        <HeaderPrincipal/>


      {/* Texto exibido na tela com o estilo definido em styles.titulo */}
      <Text style={styles.titulo}>Sobre</Text>

      <Image source={imagecircular} style={styles.imagecirculo} />


      <Text style={styles.descricao}>Este site é sobre florestas, essa imagem mostra uma floresta</Text>

    </View>
  );
}

export default Sobre;