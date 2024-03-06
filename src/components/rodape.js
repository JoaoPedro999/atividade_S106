//Rodapé ----

import React from 'react';
import { Text, View, Image, Button,  } from 'react-native';
import styles from '../styles/styles'; // Importa o arquivo de estilo

  function Rodape() {

  return (
    <View style={[styles.containerRodape, { backgroundColor: 'white',}]}></View>
  );
}

export default Rodape;