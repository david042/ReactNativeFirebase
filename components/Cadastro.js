import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import firebase from '../config/firebase';

export default function Cadastro() {
    const [nome, setNome] = useState();
    const [cargo, setCargo] = useState();

    async function cadastrar(){
        if(nome !== '' && cargo !== ''){
            let usuarios = await firebase.database().ref('usuarios');
            let chave = usuarios.push().key;

            usuarios.child(chave).set({
                nome: nome,
                cargo: cargo
            });

            setNome('');
            setCargo('');

            alert('registro cadastrado');
        }
    }

    return (
    <View style={styles.container}>
        <Text style={styles.texto}>Cadastro</Text>
        <Text style={styles.texto}>Nome:</Text>
        <TextInput
            style={styles.input}
            value={nome}
            onChangeText={(texto)=>{setNome(texto)}}
        />
        <Text style={styles.texto}>Cargo:</Text>
        <TextInput
            style={styles.input}
            value={cargo}
            onChangeText={(texto)=>{setCargo(texto)}}
        />
        <TouchableOpacity style={styles.botao} onPress={cadastrar}>
            <Text style={styles.txtBotao}>Inserir</Text>
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
    },
    input:{
        width: '80%',
        alignSelf: 'center',
        borderWidth: 1,
        fontSize: 30,
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10
    }
})