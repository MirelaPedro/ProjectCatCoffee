import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";

import { useCart } from "../components/providerCart";


export default function ShoppingCart(navigation){
    const [quantity, setQuantity] = useState(0);
    const cart = useCart();

    function Aumentar(){
        setQuantity(quantity + 1);
    }

    function Diminuir(){
        if (quantity > 0){
            setQuantity(quantity - 1);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Shopping Cart</Text>


            <View style={styles.card}>
                <Image style={styles.image} source={require('../assets/doubleBlack.jpg')}/>
                <View style={styles.texts}>
                    <Text style={styles.text}>Double Black:</Text>
                    <Text style={styles.text}>$4.50</Text>
                    
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={Aumentar}>
                            <Text style={styles.textButton}> + </Text>
                        </TouchableOpacity>

                        <Text>{quantity}</Text>
                        <TouchableOpacity style={styles.button} onPress={Diminuir}>
                            <Text style={styles.textButton}> - </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* <FlatList
            data={cart}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Image style={styles.image} source={item.image}/>
                    <View style={styles.texts}>
                        <Text style={styles.text}>{item.name}:</Text>
                        <Text style={styles.text}>${item.price}</Text>
                        
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.button} onPress={Aumentar}>
                                <Text style={styles.textButton}> + </Text>
                            </TouchableOpacity>

                            <Text>{quantity}</Text>
                            <TouchableOpacity style={styles.button} onPress={Diminuir}>
                                <Text style={styles.textButton}> - </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
            keyExtractor={item => item.id}/> */}
            
        </View>
    )
}


const styles = StyleSheet.create({

    /* VIEWs */

    container: {
        flex: 1,
        alignItems: 'center',
    },


    /* TEXTs */

    textTitle: {
        color: '#492108',
        fontSize: 40
    },




    /* TEST */

    card: {
        width: 350,
        margin: 3,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: "#f4bfad"
    },

    texts:{
        alignItems: 'center'
    },

    buttons: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },




    text: {
        fontSize: 24,
    },

    image: {
        width: 150,
        height: 150,
    },



    button: {
        width: 20,
        height:20,
        backgroundColor: "#4a4341"
    },

    textButton: {
        textAlign: 'center',
        color: '#d19f8e',
        fontSize: 16
    }


    
})