import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../styles/styles'; // Importa o arquivo de estilo
import HeaderPrincipal from '../components/header'; // Cabeçalho
import Rodape from '../components/rodape'; // Rodapé
import Submenu from '../components/Login/submenu'; //Corpo -- Submenu

export default function Login() { // Alteração aqui: export default function Login()

  return (
    <View style={styles.container}>
      <HeaderPrincipal/>
      <ImageBackground 
        style={styles.body}
        source={require('../assets/images/fundologin.jpg')}>
          <View style={styles.containercorpo}>
          <Submenu/>
          </View>
        </ImageBackground>
        <Rodape/>
      </View>
  );
}