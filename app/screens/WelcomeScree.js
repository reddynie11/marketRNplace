import React from 'react';
import { ImageBackground, View, Image, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

const WelcomeScreen = () => {
    return (
        <ImageBackground 
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
            <View style={styles.login} ></View>
            <View style={styles.signup} ></View>

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    logo:{
        height:100,
        width: 100
    },
    logoContainer:{
        alignItems: 'center',
        position: 'absolute',
        top: 70
    },
    login: {
        width:'100%',
        height:70,
        backgroundColor: colors.primary      
    },
    signup: {
        width:'100%',
        height:70,
        backgroundColor: colors.secondary      
    }
});

export default WelcomeScreen;
