import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Seja Bem Vindo</Text>
            <TouchableOpacity style={styles.botao}
            onPress={()=>navigation.navigate("Cadastro")}>
                <Text style={styles.txtBotao}>Cadastro</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    texto: {
        fontSize: 30,
        textAlign: 'center'
    },
    botao: {
        marginTop: 20,
        backgroundColor: '#000',
        width: '60%',
        alignSelf: 'center',
        borderRadius: 10
    },
    txtBotao: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center'
    }
})