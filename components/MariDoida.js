import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';


export default function MariDoida(){
    return(
        //O View é uma janela
        <View style={styles.container}>
            <ImageBackground style={{flex: 1, width: '100%', height: '100%'}} source={require('../assets/dazai.jpg')}>
                <Text style={styles.top}>Gatos Engraçadinhos</Text>

                <View style={styles.imagens}>
                    {/*se for com um link da internet não é necessário o require*/}
                    <Image style={styles.img} source={require('../assets/gatoBoquiaberto.gif')}/> 
                    <Image style={styles.img} source={require('../assets/gatoSurtado.jpg')}/>
                </View>
                
                <Text style={styles.middle}>Chuuya sendo maravilhoso kk</Text>

                <View style={styles.imagens}>
                    <Image style={styles.img} source={require('../assets/patricinha.gif')}/>
                    <Image style={styles.img} source={require('../assets/julgando.gif')}/>
                </View>

                <Text style={styles.creditos}>Créditos</Text>
            </ImageBackground>
        </View>
    );
}




const styles = StyleSheet.create({
    //VIEW PRINCIPAL
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-around'
    },


    //TEXTOS 
    top: {
        alignSelf: 'flex-start',
        fontSize: 27,
        fontFamily: '',
        color: '#131313'
    },

    middle: {
        alignSelf: 'flex-end',
        fontSize: 27,
        color: '#131313'
    },

    creditos: {
        alignSelf: 'center',
        fontSize: 21,
        color: '#f4bfad',
        backgroundColor: '#3c3c3c'
    },


    //IMAGENS
    imagens: {
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    
    img: {
        width: 150,
        height: 150,
        borderWidth: 8,
        borderColor: '#f9a799'
    },
})

