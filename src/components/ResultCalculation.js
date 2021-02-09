import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ResultCalculation = (props) => {

    const {capital, interes, mes, total, errorMessage} = props;

    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}> RESUMEN </Text>
                    <DataResult title="Cantidad Solicitada:" value={`${capital} € `} />
                    <DataResult title="Interés %:" value={`${interes} % `} />
                    <DataResult title="Plazos:" value={`${mes} meses `} />
                    <DataResult title="Pago mensual:" value={`${total.monthlyFee} € `} />
                    <DataResult title="Pago total:" value={`${total.totalPayable} € `} />
                </View>
            )}
            <View>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
        </View>
    );
}

const DataResult = (props) => {

    const {title, value} = props;

    return (
        <View style={styles.value}>
            <Text> {title} </Text>
            <Text> {value} </Text>
        </View>
    );
}

export default ResultCalculation

const styles = StyleSheet.create({
    errorMessage:{
        textAlign: "center",
        color: "#f00",
        fontWeight: "bold",
        fontSize: 20
    },
    content:{
        marginTop: 30,
        marginHorizontal: 40
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 30
    },
    boxResult:{
        padding: 30

    },
    value:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    }
})
