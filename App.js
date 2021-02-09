import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';


const App = () => {

  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [mes, setMes] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect( () => {
    if(capital && interes && mes)
      calculate();
    else
      reset();
      
  }, [capital, interes, mes]);

  const calculate = () => {
    reset();
    if(!capital){
      setErrorMessage("Ingrese una cantidad a solicitar");
    }else if(!interes){
      setErrorMessage("Ingrese un interes");
    }else if(!mes){
      setErrorMessage("Ingrese un mes");
    }else{
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, - mes)) / i);
      
      setTotal({
        monthlyFee: fee.toFixed(2).replace(".", ","),
        totalPayable: (fee * mes).toFixed(2).replace(".", ",")
      });
    }
      
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  }

  return(
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.PRIMARY_COLOR} translucent={false}></StatusBar>
      <SafeAreaView style={styles.safeArea} >
        <View style={styles.background}/>
        <View>
          <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        </View>
        <Form 
          setCapital={setCapital}
          setInteres={setInteres}
          mes = {mes}
          setMes={setMes}
        />
      </SafeAreaView>
      <ResultCalculation 
        errorMessage={errorMessage} 
        capital = {capital}
        interes = {interes}
        mes = {mes}
        total = {total}
      />
      <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    height: 290,
    alignItems: "center"
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 15
  }

})

export default App;