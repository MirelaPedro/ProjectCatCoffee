import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from "react-native";

import Card from "../components/card";
import { useCart } from "../components/providerCart";

import { db } from "../controller";
import { collection, getDocs } from "firebase/firestore"; 

export default function Products({navigation}){

    const [products, setProducts] = useState([])
    const {addProducts} = useCart();

    useEffect(() =>{
        async function loadProducts() {
            try {
                const querySnapshot = await getDocs(collection(db, 'produtos'));
                const list = [];
    
                querySnapshot.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()});
                });
    
                setProducts(list);
            } catch (error) {
                console.log("Erro ao carregar os produtos: ", error.message);
            }
        }

        loadProducts();
    }, []);


    return(
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.textTitle}>Products</Text>

                {/* ARRAY COM MAP
                {products.map((item) => (
                    <Text style={styles.textProduct}>
                        {item.name}: ${item.price}
                    </Text>
                ))} */}

                <FlatList
                data={products}
                renderItem={({item}) => (
                    <Card
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    shop={() => {
                        addProducts(item);
                        /* navigation.navigate('Cart'); */
                    }}
                    />
                )}
     
                />

            </View>
        </ScrollView>
        
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

})
