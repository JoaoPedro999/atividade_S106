import { Button, Text, View } from "react-native-web";
// Importa estilos definidos externamente no arquivo stylescomponent
import styles from "../styles/stylescomponent";
import HeaderPrincipal from "../components/header";


function Home() {

   return (
      // Componente View representa um contêiner para organizar outros componentes
      <View style={styles.body}>
        <HeaderPrincipal/>
     {/* Texto exibido na tela com o estilo definido em styles.titulo */}
     <Text style={styles.titulo}>Home</Text>
      </View>
        );
  }

  export default Home;
  