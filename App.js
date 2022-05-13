import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Cep from './components/Cep';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
      <Text style={styles.txt}>Digite seu CEP</Text>
      <TextInput
        placeholder='ex:11730000'
        keyboardType='numeric'
        style={styles.input}
        maxLength={8}
        />
        <TouchableOpacity 
          style={styles.btn}>
          <Text style={styles.txtBtn}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btnLimpar}>
          <Text style={styles.txt}>Limpar</Text>
        </TouchableOpacity>
        <Cep></Cep>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco:{
    alignItems: 'center',
    width: '100%'
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    textAlign: 'center',
    borderRadius: 5,
    marginTop:20,
    fontSize: 20,
  },
  btn: {
    marginTop: 20,
    backgroundColor:'steelblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    width: '80%',
  },
  txtBtn: {
    color: 'white',
    fontSize: 20
  },
  txt:{
    fontSize: 20,
    marginTop: 20
  }
});
