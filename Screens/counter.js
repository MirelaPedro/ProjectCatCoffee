import { View, StyleSheet, Text, Image, Button, ImageBackground, ScrollView } from "react-native";

import background from '../assets/backgroundCoffee.jpg';

export default function Counter({Navigation}){
    return(
        /* ** BackGround ** */
        <ImageBackground source={background} style={{flex: 1, width: '100%', height: '100%'}}>

            <ScrollView> {/* Para rolar a tela */}
                <View style = {styles.container}>

                    {/* * Conteúdo da página * */}

                    <Text style={styles.title}>Counter</Text>
                    <Text style={styles.text}></Text>

                    <Button
                    color="#f4bfad"
                    title="+"
                    />

                    <Button
                    color="#f4bfad"
                    title="-"
                    />
                </View>
            </ScrollView>
        </ImageBackground>
    );

}

/* ***** Estilização ***** */

const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex: 1,
        alignItems: 'center'
    },

    /* ** Textos ** */

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

    /* ** Imagens ** */
    img: {
        width: 200,
        height: 200,
        margin: 10,
        borderWidth: 3,
        borderColor: '#d19f8e'
    }
})

