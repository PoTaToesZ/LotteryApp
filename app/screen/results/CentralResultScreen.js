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

const CentralResultScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getResult();
    return () => {}
  },[])
  const getResult = () => {
    const apiURL = "https://api.xoso.me/app/json-kq-mientrung?name=KQXS&v=2&ngay_quay=2022-11-05"
    fetch(apiURL)
    .then((res) => res.json())
    .then((resJson) => {
      setData(resJson)
    }).catch((error) => {
      console.log('Error:', error)
    }).finally(() => setIsLoading(false))
  }

  

  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.item}>
          <View style={styles.table}>
            <Text style={styles.row}></Text>
            <Text style={styles.row}>ĐB</Text>
            <Text style={styles.row}>1</Text>
            <Text style={styles.row}>2</Text>
            <Text style={styles.row}>3</Text>
            <Text style={styles.row}>4</Text>
            <Text style={styles.row}>5</Text>
            <Text style={styles.row}>6</Text>
            <Text style={styles.row}>7</Text>
          </View>
          <View style={styles.table}>
            <Text style={styles.row}>{item.lotData.MaDb}</Text>
            <Text style={styles.row}>{item.lotData.DB}</Text>
            <Text style={styles.row}>{item.lotData.DB}</Text>
            <Text style={styles.row}>{item.lotData.DB}</Text>
            <Text style={styles.row}>{item.lotData.DB}</Text>
            <Text style={styles.row}>{item.lotData.DB}</Text>
            <Text style={styles.row}>{item.lotData.DB}</Text>
            <Text style={styles.row}>{item.lotData.DB}</Text>
            <Text style={styles.row}>{item.lotData.DB}</Text>
          </View>
        </View>
      </View>
    )
  }

  const route = useRoute();
  return (
    <View style={{flex: 1, backgroundColor: '#CDF0CD'}}>
      <TDHeader
        title={'Ket qua'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.bigContainer}>
        {/* <FlatList data={Ketqua} renderItem={north} numColumns={1} ListEmptyComponent={<Text>No Reigons Available</Text>} /> */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item)=>`key-${item.id}`}
        />
      </View>
    </View>
  );
};

export default CentralResultScreen;
const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: '#CDF0CD',
   
  },
  item: {
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: 'cyan',
    flexDirection: 'row',
  },
  table: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});
