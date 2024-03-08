import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../../styles/styleforms'; // Importa o arquivo de estilo
import { useNavigation } from '@react-navigation/native';

// Define o componente Submenu
export default function Submenu() {
  const navigation = useNavigation();

  return (
    // Define a estrutura de visualização do submenu de contato
    <View style={styles.submenucontact}>
      {/* Título do submenu */}
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Contato</Text>
      {/* Inputs para inserção de nome, e-mail e mensagem */}
      <View style={{gap: 10}}>
        <TextInput
          placeholder='Digite seu Nome'
          style={styles.input}
        />
        <TextInput
          placeholder='Digite seu Email'
          style={styles.input}
        />
        <TextInput 
          placeholder='Mensagem'
          style={[styles.input, {height:100}]}
        />
        {/* Botão de envio */}
        <Button
          title='Enviar'
          onPress={() => navigation.navigate("Home")} 
          color='black'
        /> 
      </View>
    </View>
  );
}
