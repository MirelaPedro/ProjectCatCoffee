import { useState } from "react";
import { StyleSheet, View, Button, Text, TextInput } from "react-native";

import { db } from "../controller";
import { collection, addDoc } from "firebase/firestore";


export default function RegisterProducts(navigation){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    const registerProducts = async () => {
        try {
            await addDoc(collection(db, 'produtos'), {
                name,
                price: parseFloat(price),
                image
            });

            setName('');
            setPrice('');
            setImage('');

        } catch (error) {
            console.log("Erro ao cadastrar o produto: ", error.message);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Cadastrar Produtos </Text>

            <Text style={styles.error}>{error}</Text>

            <View style={styles.inputs}>
                <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}/>

                <TextInput
                style={styles.input}
                placeholder="Price"
                keyboardType="number"
                value={price}
                onChangeText={setPrice}/>

                <TextInput
                style={styles.input}
                placeholder="Image"
                value={image}
                onChangeText={setImage}/>

                <Button
                title="Register"
                color="#f4bfad"
                onPress={registerProducts}/>

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
    title: {
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
    
    error:{
        color: '#ffff',
        fontSize: 16
    },


})

