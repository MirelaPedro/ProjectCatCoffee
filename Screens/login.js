import {Text, ImageBackground, View, StyleSheet, TextInput, Button} from 'react-native';
import background from '../assets/catcoffee00.jpg';

export default function Login(){
    return(
        <ImageBackground source={background} style={{flex: 1, width: '100%', height: '100%'}}>
            <View style={StyleSheet.container}>
                <Text style={styles.top}>LOGIN</Text>

                <View style={styles.inputs}>
                    <TextInput 
                    style={styles.input}
                    placeholder='E-mail'
                    keyboardType='email-address'
                    />
                    <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    keyboardType='numeric'
                    secureTextEntry= 'true'
                    />

                    <Button
                    style={styles.buttom}
                    title="Enter"
                    color="#f4bfad"
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    //Text
    top: {
        margin: 30,
        alignSelf: 'center',
        color: '#ffff',
        fontSize: 64
    },

    bottom: {
        alignSelf: 'center',
        color: '#ffff',
        fontSize: 32
    },

    input: {
        width: 325,
        height: 75,
        margin: 20,
        alignSelf: 'center',
        color: '#ffff',
        borderWidth: 5,
        borderColor: '#ffff',
        fontSize: 32
    },

    inputs: {
        padding: 30
    },

})

