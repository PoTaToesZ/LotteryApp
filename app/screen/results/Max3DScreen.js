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

const Max3DScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const getResult = async () => {
    try {
      let response = await fetch('https://api.xoso.me/app/json-max4d?page=1');
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
          <View style={styles.table}>
            <Text style={styles.row}>Nhất</Text>
            <Text style={styles.row}>Nhì</Text>
            <Text style={styles.row}>Ba</Text>
            <Text style={styles.row}>Kk1</Text>
            <Text style={styles.row}>Kk2</Text>
            <Text style={styles.row}>Kì Quay</Text>
          </View>
          <View style={styles.table}>
            <Text style={styles.row}>{item.count_giainhat}</Text>
            <Text style={styles.row}>{item.count_giainhi}</Text>
            <Text style={styles.row}>{item.count_giaiba}</Text>
            <Text style={styles.row}>{item.count_giaikk_1}</Text>
            <Text style={styles.row}>{item.count_giaikk_2}</Text>
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
        title={'Max 3D'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
        rightComponentOnPress={() => {
          navigation.navigate('Max3DDetailScreen');
        }}
      />
      {/* <FlatList data={Ketqua} renderItem={north} numColumns={1} ListEmptyComponent={<Text>No Reigons Available</Text>} /> */}
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
};

export default Max3DScreen;
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
  jp:{
    textAlign: 'left',
    fontSize: 15,
    color: 'black',
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  prize:{
    textAlign: 'right',
    fontSize: 15,
    color: 'black',
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
