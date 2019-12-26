import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({

  Container: {
    backgroundColor: '#d3d3d3',
    flex: 1, 
    // alignItems: 'center', 
    // justifyContent: 'center'
  },
  titleContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    height: 35,
    width: '100%',
    backgroundColor: '#556F82',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  CardView: {
    margin: 10,
    // padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8
  },
  titleFont: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

