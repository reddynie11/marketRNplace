import React from 'react';
import { ImageBackground, View, Image, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
    return (
        <ImageBackground
            blurRadius={2}
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer} >
                <Image
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text>Sell what you dont need</Text>
            </View>
            <View style={styles.btnContainer}>
                <AppButton title='Login' color='primary' />
                <AppButton title='Signup' color='secondary' />
            </View>

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 100
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 70
    },
    btnContainer:{
        width:'100%',
        padding: 20
    }
});

export default WelcomeScreen;
