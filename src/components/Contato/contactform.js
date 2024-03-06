import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../../styles/styleforms'; // Importa o arquivo de estilo
import { useNavigation } from '@react-navigation/native';

export default function Submenu() { // Alteração aqui: export default function Login()

  const navigation = useNavigation();

  return (

        <View style={styles.submenu}>
          <Text style={{fontSize: 25, fontWeight: 'bold', }}>Contato</Text>
            <View style={{gap: 10,}} >
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
                  style={[styles.input, {height:100 }]}
                  />
                  <Button
                  placeholder='Enviar'
                  title='Enviar'
                  onPress={() => navigation.navigate("Home")} 
                  color='black'
                  /> 
                 </View>
      </View>
  );
}