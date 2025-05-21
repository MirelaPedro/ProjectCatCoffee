import { View, Text, StyleSheet, Image, Button } from "react-native";


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
})