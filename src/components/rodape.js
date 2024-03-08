import React from 'react';
import { View } from 'react-native';
import styles from '../styles/styles'; // Importa o arquivo de estilo

// Define o componente Rodape
function Rodape() {
  // Retorna uma visualização vazia com o estilo definido para o rodapé
  return (
    <View style={[styles.containerRodape, { backgroundColor: 'white',}]}></View>
  );
}

// Exporta o componente Rodape para ser utilizado em outros lugares do aplicativo
export default Rodape;
