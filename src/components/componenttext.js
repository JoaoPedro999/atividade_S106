// Importa as bibliotecas necessárias do React e do React Native
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

// Importa os estilos definidos externamente no arquivo stylescomponent
import styles from '../styles/stylescomponent';

// Define um componente funcional chamado Componentbtn
const Componenttext = () => {  

  return (
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.body}>
      
   {/* Texto exibido na tela com o estilo definido em styles.titulo */}
   <Text style={styles.titulo}>Login</Text>
      
    </View>
  );
};

// Exporta o componente para ser utilizado em outros arquivos
export default Componenttext;
