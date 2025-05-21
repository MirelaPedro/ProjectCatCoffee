import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { useState } from "react";


export default function Card({name, image, price, shop}){
    return(
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.texts}>
                <Text style={styles.text}>{name}:</Text>
                <Text style={styles.text}>${price}</Text>
                <Button
                title="Shop"
                color="#d19f8e"
                onPress={shop}
                />
            </View>
        </View>
    )
}

export function CardCart({name, image, price}){
    const [quantity, setQuantity] = useState(1);

    function Aumentar(){
        setQuantity(quantity + 1);
    }

    function Diminuir(){
        if (quantity > 0){
            setQuantity(quantity - 1);
        }
    }

    return(
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.texts}>
                <Text style={styles.text}>{name}:</Text>
                <Text style={styles.text}>${price}</Text>
                
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
    )
}




const styles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: "#f4bfad"
    },

    texts:{
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 24,
    },

    image: {
        width: 150,
        height: 150,
    },


    buttons: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
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