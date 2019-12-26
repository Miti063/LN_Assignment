import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as globalStyles from '../../constants/Styles';
import Header from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FundData = [
  {
    id: '1',
    title: 'Mirae Asset Tax Saver Fund Direct Growth',
    returns: '20.0%',
    year: '3 Years',
    riskType: 'Moderately High',
    amt: '40,000'
  },
  {
    id: '2',
    title: 'Axis Long Term Equity Fund Direct Growth',
    returns: '20.3%',
    year: '5 Years',
    riskType: 'Moderately High',
    amt: '10,000'
  },
  {
    id: '3',
    title: 'Quantum India ESG Fund Direct Growth',
    returns: '12.6%',
    year: '3 Years',
    riskType: 'Low',
    amt: '30,000'
  },
  {
    id: '4',
    title: 'ICICI Technology Direct Plan Growth',
    returns: '17.3%',
    year: '1 Years',
    riskType: 'Medium',
    amt: '90,000'
  },
  {
    id: '5',
    title: 'Aditya Birla Sun Life Equiy Fund Direct Growth',
    returns: '12.8%',
    year: '3 Years',
    riskType: 'Moderately High',
    amt: '21,000'
  },
]

const Funds = (props) => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={[globalStyles.CardView, { padding: 20 }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{fontWeight:'bold'}}>{item.title}</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.returns}</Text>
            <Text style={{ fontSize: 12, color: 'gray' }}>{item.year}</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 12.5, color: 'gray' }}>Invested Amount :  </Text>
            <Text style={{fontSize: 13}}>₹ {item.amt}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 3 }}>
            <Text style={{ fontSize: 12.5, color: 'gray' }}>Risk Type :  </Text>
            <Text style={{fontSize: 13}}>{item.riskType}</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 18 }}>
          <TouchableOpacity onPress={() => alert('Purchase clicked')}>
            <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#009ffd', alignItems:'center', justifyContent:'center'}}>
              <FontAwesome name={'shopping-cart'} size={25} color={'#FFF'} />
            </View>
            <Text>Purchase</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Redeem clicked')}>
          <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#cc0000', alignItems:'center', justifyContent:'center'}}>
              <FontAwesome name={'gift'} size={25} color={'#FFF'} />
            </View>
            <Text>Redeem</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Switch clicked')}>
          <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: '#007600', alignItems:'center', justifyContent:'center'}}>
              <FontAwesome name={'exchange'} size={25} color={'#FFF'} />
            </View>
            <Text>Switch</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <View style={globalStyles.Container}>
      <Header title={'Portfolio Details'} />
      <FlatList
        data={FundData}
        renderItem={renderItem}
        keyExtractor={item => item.id} />
    </View >
  );
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#D3d3d3',
    height: 0.7,
    width: '100%',
    marginTop: 5
  }
})

export default Funds;
