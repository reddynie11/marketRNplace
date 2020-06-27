import React from 'react';
import {Text,TouchableOpacity, StyleSheet} from 'react-native';

import colors from '../config/colors';

const AppButton = (props) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[props.color]}]} onPress={props.onPress} >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width:'100%',
        height: 70,
        alignItems:'center',
        justifyContent:"center",
        borderRadius:50,
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '600'
    }
});

export default AppButton;