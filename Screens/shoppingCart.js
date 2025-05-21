import { View, StyleSheet, Text, Image } from "react-native";


export default function ShoppingCart(navigation){

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Shop Cart</Text>


            <View style={styles.card}>
                <Image style={styles.image} source={require('../assets/doubleBlack.jpg')}/>
                <View style={styles.texts}>
                    <Text style={styles.text}>Double Black:</Text>
                    <Text style={styles.text}>$4.50</Text>
                    <Button
                    title="Shop"
                    color="#d19f8e"
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    /* VIEWs */

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },


    /* TEXTs */

    textTitle: {
        color: '#492108',
        fontSize: 40
    },




    /* TEST */

    
})