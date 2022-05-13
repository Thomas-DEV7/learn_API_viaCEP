import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Cep() {
  return (
      <>
        <Text style={styles.texto}>Cidade:</Text>
        <Text style={styles.texto}>Estado:</Text>
        <Text style={styles.texto}>Logradouro:</Text>
        <Text style={styles.texto}>Comprlemento:</Text>

      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
      fontSize:15,
      marginTop: 10
  }
});
