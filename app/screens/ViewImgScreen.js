import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../config/colors';

const ViewImgScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} ></View>
            <View style={styles.deleteIcon} ></View>
            <Image
                resizeMode="contain"
                style={styles.img}
                source={require('../assets/chair.jpg')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        flex:1,
    },
    closeIcon:{
        height:50,
        width: 50,       
        backgroundColor: colors.primary,
        left: 50,
        top: 70,
        position:'absolute'
    },
    deleteIcon:{
        height:50,
        width: 50,
        backgroundColor: colors.secondary,
        right: 50,
        top: 70,
        position:'absolute'
    },
    img: {
        width:'100%',
        height:'100%'
    }
});

export default ViewImgScreen;