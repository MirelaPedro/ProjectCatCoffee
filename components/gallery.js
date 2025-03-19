import {Text, View, StyleSheet, Image} from 'react-native'; //O uso das chaves é necessário quando for importar mais de um componente


//Os nomes dos componentes DEVE ser com 1ª letra maiúscula!!!
export default function Gallery(){
    return(
        //O View é uma janela
        <View style={styles.container}> 
            <Text>Hello world!</Text>
            <Profile/>
        </View>
    );
}

export function Profile(){
    return(
        <View style={styles.profile}>
            <Image style={styles.img} source={{uri: 'https://media.tenor.com/CPg6xJftw5oAAAAM/bungo-stray-dogs-chuuya.gif'}} />
{/*             <Text>Lulu, o youtuber!</Text> */}
            <Image style={styles.images} source={{uri: 'https://i.pinimg.com/originals/bc/49/30/bc49300d85f0d1d310d2cc62f56959d1.gif'}}/>
        </View>
    );
}

export function Favorites(){
    return(
        <View style={styles.favorites}>
{/*             <Text>Mirela, a assustada</Text> */}
            <Image style={styles.img} source={require('../assets/patricinha.gif')}/>
            <Image style={styles.img} source={{uri: 'https://pa1.aminoapps.com/7366/2b6d47898e1cbe4fdbc1769e03b2a89a773d932fr1-268-342_hq.gif'}} />
        </View>
    )
}

//Estilo/design do apps
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7FFFD4',
    },

    img: {
        width: 150,
        height: 150,
    },

    profile: {
        flex: 1,
        backgroundColor: '#7FFF',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },

    favorites: {
        flex: 1,
        backgroundColor: '#6fffD9',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },

    images: {
        width: 150,
        height: 150,
    },
})
