import React, {useState} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../utils/colors';
import { Picker } from '@react-native-picker/picker';


const Form = (props) => {

    const { setCapital, setInteres, setMes, mes } = props;

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput 
                    placeholder="Cantidad a pedir" 
                    keyboardType="numeric" 
                    style={styles.input}
                    onChange={ e => setCapital(e.nativeEvent.text) }
                />
                
                <TextInput 
                    placeholder="Interés %" 
                    keyboardType="numeric" 
                    style={[styles.input, styles.inputPercentage]} 
                    onChange={ e => setInteres(e.nativeEvent.text) }
                />
            </View>
            <View style={styles.viewPicker}>
                <Picker
                    selectedValue={mes}
                    style={pickerSelectStyles.inputAndroid}
                    onValueChange={(itemValue, itemIndex) => setMes(itemValue)}
                    placeholder="Selecciona una opcion"
                >
                    <Picker.Item label="Selecciona una opcion" value={null} />
                    <Picker.Item label="3 meses" value={3} />
                    <Picker.Item label="6 meses" value={6} />
                    <Picker.Item label="12 meses" value={12} />
                    <Picker.Item label="24 meses" value={24} />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center"
    },
    viewInputs:{
        flexDirection: "row"
    },
    viewPicker: {
        zIndex: 1,
        height: 70
    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        marginTop: 10,
        color: "#000",
        paddingHorizontal: 20
    },
    inputPercentage:{
        width: "40%",
        marginLeft: 5
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS : {
        width: 200,
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30,
        backgroundColor: "white"
    },
    inputAndroid: {
        width: 200,
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30,
        backgroundColor: "white"
    }
});

export default Form;