import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Funds = (props) => {
  return (
    <LinearGradient colors={['#009ffd', '#3b5998', '#2a2a72']} style={styles.linearGradient}>
      <Text style={styles.title}>{props.title}</Text>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center', 
    justifyContent: 'center',
    height: 50,
    width: '100%'
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default Funds;
