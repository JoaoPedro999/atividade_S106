// Importa as bibliotecas necessárias do React e do React Native
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

// Importa os estilos definidos externamente no arquivo stylescomponent
import styles from '../../styles/styles';

// Define um componente funcional chamado Componentbtn
const Btncontato = () => {
  
  // Função btn() é chamada quando o botão é pressionado, exibindo um alerta simples
  const btn = () => {
    alert("Mensagem enviada com Sucesso!");
  };

  return (
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.body}>
      
      {/* Componente Button que, quando pressionado, chama a função btn() */}
      <Button onPress={btn} style={styles.button} title="Enviar" />
      
    </View>
  );
};

// Exporta o componente para ser utilizado em outros arquivos
export default Btncontato;
