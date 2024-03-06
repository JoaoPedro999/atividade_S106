// Importa os componentes necessários do react-native para construir a interface do usuário.
import { Text, View, ImageBackground, Button } from 'react-native';
// Importa os estilos definidos no arquivo styles.js para estilizar o componente.
import styles from '../../styles/styles'; 

// Define o componente ContainerHome.
export default function ContainerHome() {
  return (
    // Define a estrutura de visualização do componente, utilizando estilos definidos.
    <View style={styles.secondaryContainer}>
      <View style={styles.boxcentral}>
        {/* Texto de boas-vindas com estilo personalizado. */}
        <Text style={{color: 'green', fontWeight: 'bold', fontSize: 30, textAlign: 'center', }}>
          Bem Vindo ao NatureBrazil
        </Text>
        {/* Descrição do site com estilo personalizado. */}
        <Text style={{color: 'green', textAlign: 'center',}}>
          Este site é o destino definitivo para aqueles que gostam e deslumbram das belezas deste país tropical.
        </Text>
      </View>
    </View>
  );
}
