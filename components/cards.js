import { View, Text, StyleSheet, Image } from "react-native";


export default function Cards({name, image, price}){
    return(
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.texts}>
                <Text style={styles.text}>{name}:</Text>
                <Text style={styles.text}>${price}</Text>
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