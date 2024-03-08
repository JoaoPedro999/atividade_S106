import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../styles/styles'; // Importa o arquivo de estilo
import HeaderPrincipal from '../components/header'; // Cabeçalho
import Rodape from '../components/rodape'; // Rodapé
import Submenu from '../components/Login/submenu'; // Corpo - Submenu

export default function Login() { // Define o componente Login como padrão para exportação

  return (
    // Define a estrutura de visualização da página de login
    <View style={styles.container}>
      {/* Renderiza o cabeçalho da página */}
      <HeaderPrincipal/>
      {/* Utiliza uma imagem de fundo para o corpo da página de login */}
      <ImageBackground 
        style={styles.body}
        source={require('../assets/images/fundologin.jpg')}>
          {/* Define um contêiner para organizar o corpo da página */}
          <View style={styles.containercorpo}>
            {/* Renderiza o submenu da página de login */}
            <Submenu/>
          </View>
        </ImageBackground>
      {/* Renderiza o rodapé da página */}
      <Rodape/>
    </View>
  );
}
