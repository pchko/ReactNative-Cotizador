import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

const Footer = (props) => {

    const {calculate} = props;

    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={calculate}>
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({

    viewFooter:{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 100,
        backgroundColor: colors.PRIMARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        fontWeight: "bold",
        fontSize: 18,
        color: "#FFF",
        textAlign: "center"
    },
    button:{
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: "75%"
    }
})
