import { View, Text, StyleSheet, Image, Button } from "react-native";


export default function Card({name, image, price}){
    return(
        <View style={styles.card}>
            <Image style={styles.image} source={require('../assets/doubleBlack.jpg')}/>
            <View style={styles.texts}>
                <Text style={styles.text}>{name}:</Text>
                <Text style={styles.text}>${price}</Text>
                <Button
                title="Shop"
                color="#d19f8e"
                />
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: "#f4bfad"
    },

    texts:{
        alignItems: 'center'
    },

    text: {
        fontSize: 24,
    },

    image: {
        width: 150,
        height: 150,
    },
})