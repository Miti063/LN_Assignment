import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PieChart from 'react-native-pie-chart';

import * as globalStyles from '../../constants/Styles';
import Header from '../../components/Header';

const chart_wh = 250
const series = [60, 150, 70, 210]
const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50']


const Dashboard = (props) => {
  return (
    <View style={globalStyles.Container}>
      <Header title={'Dashboard'} />
      <ScrollView>
        <View style={[globalStyles.CardView, { padding: 20 }]}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>TOTAL INVESTMENTS</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.childContainer}>
              <Text style={styles.textStyl}>₹ 1,78,000</Text>
              <Text style={styles.headingTilte}>Invested Value</Text>
            </View>
            <View style={styles.childContainer}>
              <Text style={styles.textStyl}>₹ 2,28,000</Text>
              <Text style={styles.headingTilte}>Current Value</Text>
            </View>
            <View style={styles.childContainer}>
              <Text style={styles.textStyl}>1.98%</Text>
              <Text style={styles.headingTilte}>XIRR</Text>
            </View>
          </View>
          <View style={{ marginTop: 40, alignItems: 'center' }}>
            <PieChart
              chart_wh={chart_wh}
              series={series}
              sliceColor={sliceColor}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#2196F3', height: 15, width: 8 }}/>
                <Text style={{ marginLeft: 3, fontSize: 12 }}>Equity</Text>
              </View>
              <Text style={[styles.textStyl, { marginTop: 3}]}>₹ 48,000</Text>
            </View>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#4CAF50', height: 15, width: 8 }}/>
                <Text style={{ marginLeft: 3, fontSize: 12 }}>Liquid</Text>
              </View>
              <Text style={[styles.textStyl, { marginTop: 3}]}>₹ 90,000</Text>
            </View>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#FFEB3B', height: 15, width: 8 }}/>
                <Text style={{ marginLeft: 3, fontSize: 12}}>Debt</Text>
              </View>
              <Text style={[styles.textStyl, { marginTop: 3}]}>₹ 22,000</Text>
            </View>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#F44336', height: 15, width: 8 }}/>
                <Text style={{ marginLeft: 3, fontSize: 12 }}>Multi Asset</Text>
              </View>
              <Text style={[styles.textStyl, { marginTop: 3}]}>₹ 18,000</Text>
            </View>
          </View>

        </View>

      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  headingTilte: {
    fontSize: 12,
    color: 'gray',
    marginTop: 3
  },
  textStyl: {
    fontSize: 13.5,
    fontWeight: '300',
    marginTop: 20
  },
  line: {
    marginTop: 5,
    height: 0.7,
    backgroundColor: '#d3d3d3'
  },
  childContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Dashboard;
