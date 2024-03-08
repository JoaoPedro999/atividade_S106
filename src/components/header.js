import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/styles'; // Importa o arquivo de estilo
import { useNavigation } from '@react-navigation/native';

// Define o componente HeaderPrincipal
function HeaderPrincipal() {
  const navigation = useNavigation();

  return (
    // Define a estrutura de visualização do cabeçalho
    <View style={[styles.containerHeader, { backgroundColor: 'white',}]}>
      {/* Define o logotipo como um componente TouchableOpacity para permitir a navegação para a página inicial */}
      <TouchableOpacity
        style={styles.logo}
        onPress={() => navigation.navigate("Home")}>
        {/* Renderiza a imagem do logotipo */}
        <Image 
          style={styles.imagelogo}
          source={require('../assets/images/SENAI.png')}
        />
      </TouchableOpacity>

      {/* Define uma linha vertical para separar o logotipo dos botões de navegação */}
      <View style={{backgroundColor: 'black', width: 1, height: '100%'}}></View>
      
      {/* Define uma View para conter os botões de navegação */}
      <View style={styles.Buttons}>
        {/* Botão para navegar para a página Home */}
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
        {/* Botão para navegar para a página Login */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>
        {/* Botão para navegar para a página Sobre */}
        <TouchableOpacity onPress={() => navigation.navigate("Sobre")}>
          <Text>Sobre</Text>
        </TouchableOpacity>
        {/* Botão para navegar para a página Contato */}
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <Text>Contato</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Exporta o componente HeaderPrincipal para ser utilizado em outros lugares do aplicativo
export default HeaderPrincipal;
