import { Text, View } from "react-native-web";
// Importa estilos definidos externamente no arquivo stylescomponent
import { useNavigation } from "@react-navigation/native";


function Sobre() {
  const navigation = useNavigation();
  return (
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.body}>

      {/* Texto exibido na tela com o estilo definido em styles.titulo */}
      <Text style={styles.titulo}>Sobre</Text>


    </View>
  );
}

export default Sobre;