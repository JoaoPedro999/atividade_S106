import { Button, Text, View } from "react-native-web";
// Importa estilos definidos externamente no arquivo stylescomponent
import styles from "../styles/stylescomponent";
import { useNavigation } from "@react-navigation/native";


function Home() {

    const navigation = useNavigation();
   return (
      // Componente View representa um contêiner para organizar outros componentes
      <View style={styles.body}>
        
     {/* Texto exibido na tela com o estilo definido em styles.titulo */}
     <Text style={styles.titulo}>Home</Text>
     <Button title="Sobre" onPress={() => navigation.navigate("Sobre")}/>
        
      </View>
        );
  }

  export default Home;
  