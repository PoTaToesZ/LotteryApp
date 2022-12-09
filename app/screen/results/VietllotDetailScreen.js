import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors, Fonts, Images} from '@app/themes';
import {
  TDButtonPrimary,
  TDButtonSecondary,
  TDDividerWithTitle,
  TDTextInputAccount,
  TDTextSearch,
  TDHeader,
} from '@app/components';

const VietllotDetailScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const getResult = async () => {
    try {
      let response = await fetch('https://api.xoso.me/app/json-mega?page=1');
      let json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.item}>
          <View >
            <Text style={styles.date}>{item.ngay_quay}</Text>
            <Text style={styles.prize}>Prize: {item.prize}</Text>
          </View>
          <View style={styles.table2}>
            <Text style={styles.number}>{item.ketqua_1}</Text>
            <Text style={styles.number}>{item.ketqua_2}</Text>
            <Text style={styles.number}>{item.ketqua_3}</Text>
            <Text style={styles.number}>{item.ketqua_4}</Text>
            <Text style={styles.number}>{item.ketqua_5}</Text>
            <Text style={styles.number}>{item.ketqua_6}</Text>
          </View>
        </View>
      </View>
    );
  };

  const route = useRoute();

  return (
    <View style={{flex: 1, backgroundColor: '#CDF0CD'}}>
      <ScrollView>
        <TDHeader
          title={'MEGA 6/45'}
          leftComponentOnPress={() => {
            navigation.goBack();
          }}
        />
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
      </ScrollView>
    </View>
  );
};

export default VietllotDetailScreen;
const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: '#CDF0CD',
  },
  item: {
    padding: 15,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'cyan',
    margin: 5,
  },
  number: {
    fontSize: 14,
    color: 'black',
    borderRadius: 50,
    borderWidth: 1,
    height: 23,
    width: 23,
    textAlign: 'center',
    borderColor: 'crimson',
    backgroundColor: 'white'
  },
  date: {
    fontSize: 15,
    color: 'black',
    padding: 5,
  },
  prize: {
    fontSize: 15,
    color: 'black',
    textAlign: 'right',
    bottom: 30,
    padding: 5,
  },
  table2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
