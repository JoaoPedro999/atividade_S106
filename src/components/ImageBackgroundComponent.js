// ImageBackgroundComponent.js
import { ImageBackground, StyleSheet } from 'react-native';

// Importa os componentes personalizados do seu aplicativo
import ComponentForm from "./component_form";
import Componentbtn from "./component_btn";
import Componentimg from "./component_img";

const ImageBackgroundComponent = ({ source, children }) => {
  {/* Componente ImageBackground exibe uma imagem de fundo com o estilo definido em styles.background */}
  return (
  <ImageBackground
    source={require("../assets/images/fundo.jpg")}
    resizeMode="cover"
    style={styles.bckimg} 
  >

    {/* Componente personalizado ComponentForm */}
    <ComponentForm/>

    {/* Componente personalizado Componentbtn */}
    <Componentbtn/>

    {/* Componente personalizado Componentimg */}
    <Componentimg/>

  </ImageBackground>
)};

const styles = StyleSheet.create({
  bckimg: { 
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageBackgroundComponent;
