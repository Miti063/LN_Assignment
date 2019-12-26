import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as globalStyles from '../../constants/Styles';
import Header from '../../components/Header';

const tableHead =['Period', 'Mirae Asset Tax Saver Fund Direct Growth', 'Axis Long Term Equity Fund Direct Growth', 'Quantum ESG Fund Direct Growth'];
const tableTitle = ['Since Inception', '10 Years', '7 Years', '5 Years'];
const tableData = [
        ['13.00%', '12.80%', '11.39%'],
        ['11.64%', '8.70%', '10.93%'],
        ['11.71%', '16.67%', '8.07%'],
        ['6.63%', '14.05%', '10.71%']
      ];

const Report = (props) => {
  
  return (
    <View style={globalStyles.Container}>
      <Header title={'Fund Performance'} />
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, padding: 5}}>
          <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={tableTitle} style={styles.title} heightArr={[35,35]} textStyle={styles.text}/>
            <Rows data={tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingTop: 30, backgroundColor: '#fff', marginTop: 20 },
  head: {  height: 90,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 35  },
  text: { textAlign: 'center' }
});

export default Report;
