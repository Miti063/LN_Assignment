import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as globalStyles from '../../constants/Styles';
import Header from '../../components/Header';

const Profile = (props) => {
  return (
    <View style={globalStyles.Container}>
      <Header title={'My Profile'} />
      <ScrollView>
        <View style={globalStyles.CardView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>Miti Shah</Text>
              <Text>abc@gmail.com</Text>
              <Text>9820****46</Text>
            </View>
            <FontAwesome name={'user-circle-o'} size={60}/>
          </View>

          <View style={[globalStyles.titleContainer, {marginTop: 15, borderTopLeftRadius: 0, borderTopRightRadius: 0}]}>
            <Text style={globalStyles.titleFont}>Personal Details</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={styles.headingTilte}>Date of Birth</Text>
            <Text style={styles.textStyl}>DD/MM/YYYY</Text>
            <View style={styles.line} />
            <Text style={styles.headingTilte}>PAN Number</Text>
            <Text style={styles.textStyl}>AAX***7B</Text>
            <View style={styles.line} />
          </View>
        </View>

        <View style={globalStyles.CardView}>
          <View style={globalStyles.titleContainer}>
            <Text style={globalStyles.titleFont}>Nominee Details</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={styles.headingTilte}>Nominee Name</Text>
            <Text style={styles.textStyl}>Test</Text>
            <View style={styles.line} />
            <Text style={styles.headingTilte}>Relation</Text>
            <Text style={styles.textStyl}>Father</Text>
            <View style={styles.line} />
          </View>
        </View>

        <View style={globalStyles.CardView}>
          <View style={globalStyles.titleContainer}>
            <Text style={globalStyles.titleFont}>Bank Details</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={styles.headingTilte}>Bank Name</Text>
            <Text style={styles.textStyl}>HDFC Bank</Text>
            <View style={styles.line} />
            <Text style={styles.headingTilte}>Address</Text>
            <Text style={styles.textStyl}>01/104, Tulsiani Chambers, Free Press Marg, Nariman Point, Mumbai, Maharashtra 400021</Text>
            <View style={styles.line} />
            <Text style={styles.headingTilte}>IFSC Code</Text>
            <Text style={styles.textStyl}>HDFC0000291</Text>
            <View style={styles.line} />
            <Text style={styles.headingTilte}>MICR code</Text>
            <Text style={styles.textStyl}>400240046</Text>
            <View style={styles.line} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingTilte: {
    fontSize: 13,
    color: 'gray',
    marginTop: 10
  },
  textStyl: {
    fontSize: 13.5,
    fontWeight: 'bold',
    marginTop: 3
  },
  line: {
    marginTop: 5,
    height: 0.7,
    backgroundColor: '#d3d3d3'
  }
})

export default Profile;
