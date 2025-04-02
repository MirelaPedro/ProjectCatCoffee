import { View, StyleSheet, Text, Image, Button, ImageBackground, ScrollView } from "react-native";

import background from '../assets/backgroundCoffee.jpg';

export default function Feed({Navigation}){
    return(
        /* ** BackGround ** */
        <ImageBackground source={background} style={{flex: 1, width: '100%', height: '100%'}}>

            <ScrollView> {/* Para rolar a tela */}
                <View style = {styles.container}>

                    {/* * Conteúdo da página * */}

                    <Text style={styles.title}>Feed</Text>
                    <Text style={styles.text}>Romeu estava feliz hoje! além de ter visto Julieta (Toda cheirosa por causa do banho) ganhou muitos pesticos dos clientes!!!</Text>
                    <Text style={styles.text}>O aroma do dia era vanilla, o preferido do Romeu, então ele ficou o dia inteiro rolando debaixo do aromatizador enqaudno se empanturrava de comida.</Text>
                    <Text style={styles.text}>O amor está no ar, afinal nosso lindo gatinho do amor foi o premiado do dia. Apreciem o seu lindo e grandioso coração!</Text>

                    <Image style={styles.img} source={require('../assets/gato00.jpg')}></Image>

                    <Button
                    color="#f4bfad"
                    title="Conheça nossos gatos!"
                    onPress={() => navigation.navigate('')}/>
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

