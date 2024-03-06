//Cabeçalho-------

import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,  } from 'react-native';
import styles from '../styles/styles'; // Importa o arquivo de estilo
import { useNavigation } from '@react-navigation/native';

  function HeaderPrincipal() {
    const navigation = useNavigation();
  return (
    <View style={[styles.containerHeader, { backgroundColor: 'white',}]}>
      <TouchableOpacity
      style={styles.logo}
      onPress={() => navigation.navigate("Home")}>
      <Image 
      style={styles.imagelogo}
      source={require('../assets/images/SENAI.png')}
      />
      </TouchableOpacity>

      <View style={{backgroundColor: 'black', width: 1, height: '100%'}}></View>
      <View style={styles.Buttons}>
      <TouchableOpacity
      onPress={() => navigation.navigate("Login")} 
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Sobre")}
      >
        <Text>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("Contact")}
      >
        <Text>Contato</Text>
      </TouchableOpacity>
      
      </View>

    </View>
  );
}

export default HeaderPrincipal;