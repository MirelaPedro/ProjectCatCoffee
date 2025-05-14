import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from "react-native";

import Cards from "../components/cards";

import { db } from "../controller";
import { collection, getDocs } from "firebase/firestore"; 

export default function Products(navigation){

    /* const [products, setProducts] = useState([
        {id: 1, name: 'Cappucino', price: 4.50, image: require('../assets/coffee00.jpg')},
        {id: 2, name: 'Catccino', price: 5.00, image: require('../assets/coffee01.jpg')},
        {id: 3, name: 'Chocolate Miau', price: 6.00, image: require('../assets/chocolateMiau.jpg')},
        {id: 4, name: 'Miau Flake', price: 7.50, image: require('../assets/miauFlake.jpg')},
        {id: 5, name: 'Latte Meowchiatto', price: 7.5, image: require('../assets/latteMeowchiatto.jpg')},
        {id: 6, name: 'Double Black', price: 4.5, image: require('../assets/doubleBlack.jpg')}
    ]) */

    const [products, setProducts] = useState([])

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
                    <Cards
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    />
                )}
                keyExtractor={item => item.id}
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

    card: {
        padding: 15,
        margin: 5,
        alignItems: 'center',
        backgroundColor: "#f4bfad"
    },

    /* TEXTs */

    textTitle: {
        color: '#492108',
        fontSize: 40
    },

    textProduct: {
        fontSize: 24
    },

    image: {
        width: 150,
        height: 150
    }
})
