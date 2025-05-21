import { View, StyleSheet, Text, FlatList, ScrollView} from "react-native";

import { useCart } from "../components/providerCart";
import { CardCart } from "../components/card";


export default function Cart({navigation}){
    const {cart} = useCart();

    return(
        <ScrollView>        
            <View style={styles.container}>
                <Text style={styles.textTitle}>Cart</Text>

                <FlatList
                data={cart}
                renderItem={({item}) => (

                    <CardCart
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    />
                )}
                keyExtractor={item => item.id}/>   
            </View>
        </ScrollView>
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

    
})