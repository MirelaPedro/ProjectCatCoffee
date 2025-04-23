import { View, StyleSheet, Text, Image, Button, ImageBackground, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

import background from '../assets/backgroundCoffee.jpg';

export default function Counter({Navigation}){

    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [contador, setContador] = useState(0)

    function Aumentar(){
        setContador(contador + 1)
    }

    function Diminuir(){
        if (contador > 0){
            setContador(contador - 1)
        }
    }




    return(
        /* ** BackGround ** */
        <ImageBackground source={background} style={{flex: 1, width: '100%', height: '100%'}}>

            <ScrollView> {/* Para rolar a tela */}
                <View style = {styles.container}>

                    {/* * Conteúdo da página * */}

                    <Text style={styles.title}>Counter</Text>
                    <Text style={styles.text}>Counter: {contador}</Text>

                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={Aumentar}>
                            <Text style={styles.textButton}> + </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={Diminuir}>
                            <Text style={styles.textButton}> - </Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                    style={styles.input}
                    placeholder='Nome: '
                    placeholderTextColor={'#d19f8e'}
                    value={nome}
                    onChangeText={setNome}
                    />

                    <TextInput
                    style={styles.input}
                    placeholder='E-mail: '
                    placeholderTextColor={'#d19f8e'}
                    value={email}
                    onChangeText={setEmail}
                    />

                    <Text style={styles.text}>Hi, {nome}, your e-mail is {email}.</Text>

                </View>
            </ScrollView>
        </ImageBackground>
    );

}

/* ***** Styles ***** */

const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex: 1,
        alignItems: 'center'
    },

    /* ** Views ** */

    buttons: {
        width: 400,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    /* ** Texts ** */

    title: {
        fontSize: 40,
        color: '#492108',
        textAlign: 'center'
    },

    text: {
        fontSize: 24,
        color: '#492108',
        textAlign: 'justify',

    },

    input: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: '#4a4341',
        backgroundColor: '#4a4341'
    },

    /* ** Images ** */
    img: {
        width: 200,
        height: 200,
        margin: 10,
        borderWidth: 3,
        borderColor: '#d19f8e'
    },

    
    /* ** Buttons ** */

    button: {
        width: 100,
        height:50,
        backgroundColor: "#4a4341"
    },

    textButton: {
        textAlign: 'center',
        color: '#d19f8e',
        fontSize: 32
    }
})

