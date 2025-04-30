import {Text, ImageBackground, View, StyleSheet, TextInput, Button} from 'react-native';
import { useState } from "react";

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../controller';

import background from '../assets/catcoffee00.jpg';
import Home from './home';

export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const verificaUser = () => {
        signInWithEmailAndPassword(auth, email, password).then(userCredential => {
            console.log('Usuário Logado!', userCredential.user.email);
            navigation.navigate('HomeTab')
        })
        .catch((error) => {
            console.log('Erro ao logar', error.message);
        })
    }
    return(
        <ImageBackground source={background} style={{flex: 1, width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <Text style={styles.top}>LOGIN</Text>

                {/* LOGIN */}
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
                    placeholder='Password'
                    keyboardType='numeric'
                    secureTextEntry= 'true'
                    value={password}
                    onChangeText={setPassword}
                    />

                    <Button
                    style={styles.buttom}
                    title="Enter"
                    color="#f4bfad"
                    onPress={verificaUser}
                    />
                </View>

                {/* SING IN */}

                <Text style={styles.text}>Don' have a cont? Sing in.</Text>

                <Button
                style={styles.buttom}
                title="Sing In"
                color="#f4bfad"
                onPress={() => navigation.navigate('Sign In')}
                />

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    //Views 
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    inputs: {
        height: 350,
        padding: 30,
        justifyContent: 'space-around'
    },

    //Text
    top: {
        color: '#ffff',
        fontSize: 64
    },

    text: {
        color: '#f4bfad',
        fontSize: 32
    },

    input: {
        width: 325,
        height: 75,
        color: '#ffff',
        borderWidth: 5,
        borderColor: '#ffff',
        fontSize: 32
    },

    //Buttons
    bottom: {
        height: 50,
        color: '#ffff',
        fontSize: 32
    },

})

