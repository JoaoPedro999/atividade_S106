import React from 'react';
import { View, Text, Image, } from 'react-native';

// Importa os estilos definidos externamente no arquivo stylescomponent
import styles from '../styles/styles';
import { useNavigation } from "@react-navigation/native";

const Descricao = () => {

    const navigation = useNavigation();
    const imagecircular = { uri: 'https://wallpapercave.com/wp/wp3219866.jpg' }


//     return (
//         // Componente View representa um contêiner para organizar outros componentes
//         <View style={styles.container}>


//             {/* Texto exibido na tela com o estilo definido em styles.titulo */}
//             <Text style={styles.titulo}>Sobre</Text>

//             <Image source={imagecircular} style={styles.Ciruculo} />


//             <Text style={styles.descricao}>Este site é sobre florestas, essa imagem mostra uma floresta</Text>

//         </View>
//     );
// }

export default Descricao;

