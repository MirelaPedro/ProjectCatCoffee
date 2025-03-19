import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';
import background from '../assets/catcoffee00.jpg';

export default function Home(){
    return(
        <ImageBackground source={background} style={{flex: 1, width: '100%', height: '100%'}}>
            <View style={StyleSheet.container}>
                <Text style={styles.top}>CatCoffee MiauFashion</Text>

                <View style={styles.images}>
                    <Image style={styles.img} source={require('../assets/gato00.jpg')}/>
                    <Image style={styles.img} source={require('../assets/gato01.jpg')}/>
                </View>

                <Text style={styles.middle}>Since 2008.</Text>

                <View style={styles.images}>
                    <Image style={styles.img} source={require('../assets/coffee00.jpg')}/>
                    <Image style={styles.img} source={require('../assets/coffee01.jpg')}/>
                </View>

                <Text style={styles.bottom}>We're waiting for you!!!</Text>
            
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    //Image
    img: {
        width: 150,
        height: 150,
        borderWidth: 3,
        borderColor: '#ffff'
    },

    images: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    //Text
    top: {
        margin: 50,
        alignSelf: 'flex-start',
        color: '#ffff',
        fontSize: 40
    },

    middle: {
        alignSelf: 'flex-end',
        color: '#ffff',
        fontSize: 32
    },

    bottom: {
        marginTop: 150,
        alignSelf: 'center',
        color: '#ffff',
        fontSize: 32
    }
})

