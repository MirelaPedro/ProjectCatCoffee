import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { useState } from "react";

import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../controller";


/* ******************** DEFAULT FUNCTION ******************* */
export default function SignIn({navigation}){

    //useState: atualiza o estado da variável, é utilizado para atualizar as variáveis em tempo real na tela.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    //Criando uma função para CADASTRAR o usuário
    const signInUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log('cadastrado!', userCredential.user.email)
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.log('Erro', error.message);
            setError(error.message);
          });
    }

    //* ********** TELA *********** */
    return(
        <View style={styles.container}>
            {/* TÍTULO */}
            <Text style={styles.top}>Sign In</Text>

            {/* Sessão Inputs */}
            <View style={styles.inputs}>
                <Text style={styles.error}>{error}</Text>

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

                {/* <Button
                style={styles.buttom}
                title="Login"
                color="#f4bfad"
                onPress={() => navigation.navigate('Login')}
                /> */}
            </View>

            {/* Sessão Login */}
            <View style={styles.login}>
                <Text style={styles.text}>Have a cont?</Text>

                <TouchableOpacity
                onPress={() => navigation.navigate('Login')}><Text style={styles.text}>Login.</Text></TouchableOpacity>
            </View>
        </View>
    )
}


/* ******************** STYLES ******************* */
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
    
    login:{
        justifyContent: 'center',
        alignItems: 'center'
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

    text: {
        color: '#ffff',
        fontSize: 32
    },

    error:{
        color: '#ffff',
        fontSize: 16
    },

    //BOTTONs

    bottom: {
        color: '#ffff',
        fontSize: 32
    },


})



