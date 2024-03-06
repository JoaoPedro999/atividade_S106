<<<<<<< Updated upstream
import { View, } from "react-native";
import HeaderPrincipal from "../components/header";
// Importa estilos definidos externamente no arquivo stylescomponent
import { useNavigation } from "@react-navigation/native";
import Descricao from "../components/Descricao";


function Sobre() {
 
  return (
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.container}>
      <HeaderPrincipal />
      <Descricao />
=======
import { Text, View, Image } from "react-native";
// Importa estilos definidos externamente no arquivo stylescomponent
import styles from "../styles/stylescomponent";
import { useNavigation } from "@react-navigation/native";
import HeaderPrincipal from "../components/header";



function Sobre() {

  const navigation = useNavigation();
  const imagecircular = { uri: 'https://wallpapercave.com/wp/wp3219866.jpg' }


  return (
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.container}>
      <HeaderPrincipal/>

      {/* Texto exibido na tela com o estilo definido em styles.titulo */}
      <Text style={styles.titulo}>Sobre</Text>

      <Image source={imagecircular} style={styles.imagem}>

      </Image>
      <Text style={styles.descricao}>Este site é sobre florestas, esta imagem mostra uma floresta.</Text>

>>>>>>> Stashed changes
    </View>
  );
}

export default Sobre;