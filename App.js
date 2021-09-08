import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      {/* SEÇÃO 1 */}
      <View style={styles.secao1}>
        <Text style={styles.tituloBold}>Seção 1</Text>
        <Text style={styles.txtBold}>Atividade 1</Text>
        <Text style={styles.txtBold}>Pedro Daniel Portes</Text>
        <Text style={styles.txtBold}>RA: 2019102845</Text>
        <Text style={styles.txtBold}>08/09/2021</Text>
      </View>
     
      <StatusBar style="auto" />
      {/* SEÇÃO 2 */}
      <View style={styles.secao2}>
      <Text style={styles.tituloBold}>Seção 2</Text>
        <View style={styles.quadVerm}></View>
        <View style={styles.quadVerd}></View>
        <View style={styles.quadAzul}></View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  secao1: {
    marginTop: 40,
    marginBottom:50,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBold:
  {
    alignItems: 'center',
    fontWeight: 'bold',
  },
  tituloBold:
  {
    fontWeight: 'bold',
    fontSize:30
  },
  secao2:
  {
    backgroundColor: '#EEE',
    alignItems: 'center'
  },  
  quadVerm:
  {
    backgroundColor: '#A20202',
    height:50,
    width:'80%'
  },
  quadVerd:
  {
    backgroundColor: '#02FA2F',
    height:100,
    width:'80%'
  },
  quadAzul:
  {
    backgroundColor: '#00AAFF',
    height:150,
    width:'80%'
  }
});
