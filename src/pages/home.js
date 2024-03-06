import { View, ImageBackground } from "react-native";
// Importa estilos definidos externamente no arquivo stylescomponent
import styles from "../styles/styles";
import HeaderPrincipal from "../components/header";
import Rodape from "../components/rodape";
import ContainerHome from "../components/Home/corpohome";

function Home() {

   return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/fundoHome.jpg')} style={styles.body} >
      <HeaderPrincipal/>
      <ContainerHome/>
      <Rodape/>
      </ImageBackground>
      </View>
        );
  }

  export default Home;
  