import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../controller";

export default function SignIn({navigation}){

    //useState: atualiza o estado da variável, é utilizado para atualizar as variáveis em tempo real na tela.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Criando uma função para CADASTRAR o usuário
    const signInUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log('cadastrado!', userCredential.user.email)
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.log('Erro', error.message);
          });
    }

    //* ********** TELA *********** */
    return(
        <View style={styles.container}>
            {/* TÍTULO */}
            <Text style={styles.top}>Sign In</Text>

            {/* Sessão Inputs */}
            <View style={styles.inputs}>
                <TextInput 
                style={styles.input}
                placeholder='E-mail'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
                />
                <TextInput 
                style={styles.input}
                placeholder='Create Password'
                keyboardType='numeric'
                secureTextEntry= 'true'
                value={password}
                onChangeText={setPassword}
                />

                <Button
                style={styles.buttom}
                title="Sign In"
                color="#f4bfad"
                onPress={signInUser}
                />

                <Button
                style={styles.buttom}
                title="Login"
                color="#f4bfad"
                onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    //VIEWs 
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#000000"
    },

    inputs: {
        height: 350,
        padding: 30,
        justifyContent: 'space-around'
    },

    //TEXTs
    top: {
        color: '#ffff',
        fontSize: 64
    },

    input: {
        width: 325,
        height: 75,
        color: '#ffff',
        borderWidth: 5,
        borderColor: '#ffff',
        fontSize: 32
    },

    //BOTTONs

    bottom: {
        color: '#ffff',
        fontSize: 32
    },


})



