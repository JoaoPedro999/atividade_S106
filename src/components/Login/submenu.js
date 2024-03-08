import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../../styles/styleforms'; // Importa o arquivo de estilo
import { useNavigation } from '@react-navigation/native';

// Define o componente Submenu
export default function Submenu() {
  const navigation = useNavigation();

  return (
    // Define a estrutura de visualização do submenu de login
    <View style={styles.submenu}>
      {/* Título do submenu */}
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Faça Login</Text>
      {/* Inputs para inserção de e-mail e senha */}
      <View style={{gap: 10}}>
        <TextInput
          placeholder='Digite seu E-mail'
          style={styles.input}
        />
        <TextInput
          secureTextEntry={true}
          placeholder='Digite sua senha'
          style={styles.input}
        />
        {/* Botão de login */}
        <Button
          title='Login'
          onPress={() => navigation.navigate("Sobre")} 
          color='black'
        /> 
      </View>
    </View>
  );
}
