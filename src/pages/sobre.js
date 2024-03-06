import { View, } from "react-native";
import HeaderPrincipal from "../components/header";
// Importa estilos definidos externamente no arquivo stylescomponent
import styles from "../styles/stylescomponent";
import { useNavigation } from "@react-navigation/native";
import Descricao from "../components/Descricao";


function Sobre() {
 
  return (
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.container}>
      <HeaderPrincipal />
      <Descricao />
    </View>
  );
}

export default Sobre;