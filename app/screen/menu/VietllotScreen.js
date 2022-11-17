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

const VietllotScreen = () => {
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
          <Text style={styles.date}>{item.ngay_quay}</Text>
          <Text style={styles.prize}>Prize: {item.prize}</Text>
          <View style={styles.table}>
            <Text style={styles.row}>Jackpot</Text>
            <Text style={styles.row}>Giải Nhất</Text>
            <Text style={styles.row}>Giải Nhì</Text>
            <Text style={styles.row}>Giải Ba</Text>
            <Text style={styles.row}>Kì Quay</Text>
          </View>
          <View style={styles.table}>
            <Text style={styles.row}>{item.count_jackpot}</Text>
            <Text style={styles.row}>{item.count_giainhat}</Text>
            <Text style={styles.row}>{item.count_giainhi}</Text>
            <Text style={styles.row}>{item.count_giaiba}</Text>
            <Text style={styles.row}>{item.ki_quay}</Text>
          </View>
        </View>
      </View>
    );
  };

  const route = useRoute();

  return (
    <View style={{flex: 1, backgroundColor: '#CDF0CD'}}>
      <TDHeader
        title={'MEGA 6/45'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
        rightComponentOnPress={() => {
          navigation.navigate('VietllotDetailScreen');
        }}
      />
      {/* <FlatList data={Ketqua} renderItem={north} numColumns={1} ListEmptyComponent={<Text>No Reigons Available</Text>} /> */}
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
};

export default VietllotScreen;
const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: '#CDF0CD',
  },
  item: {
    flexDirection: 'column',
    padding: 15,
    borderWidth: 1,
    borderColor: 'cyan',
    margin: 5,
  },
  row: {
    fontSize: 15,
    color: 'black',
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    textAlign: 'right',
  },
  date: {
    fontSize: 15,
    color: 'black',
  },
  prize: {
    fontSize: 15,
    color: 'black',
    textAlign: 'right',
    bottom: 20,
  },
  table: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
