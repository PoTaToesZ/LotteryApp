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

const NorthResultScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getResult();
    return () => {}
  },[])
  const getResult = () => {
    const apiURL = "https://api.xoso.me/app/json-kq-mienbac?ngay_quay=2022-11-08&date_range=7"
    fetch(apiURL)
    .then((res) => res.json())
    .then((resJson) => {
      setData(resJson);
      // console.log(resJson)
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
            <Text style={styles.rowdata}>{item.lotData.MaDb}</Text>
            <Text style={styles.rowdata}>{item.lotData.DB}</Text>
            <Text style={styles.rowdata}>{item.lotData['1']}</Text>
            <Text style={styles.rowdata}>{item.lotData['2']}</Text>
            <Text style={styles.rowdata}>{item.lotData['3']}</Text>
            <Text style={styles.rowdata}>{item.lotData['4']}</Text>
            <Text style={styles.rowdata}>{item.lotData['5']}</Text>
            <Text style={styles.rowdata}>{item.lotData['6']}</Text>
            <Text style={styles.rowdata}>{item.lotData['7']}</Text>
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

export default NorthResultScreen;
const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: '#CDF0CD',
  },
  item: {
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'cyan',
    flexDirection: 'row',
    margin: 5,
 
  },
  table: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  rowdata:{
    textAlign: 'center',
    padding: 5,
    margin: 5,
  },
  row:{
    padding: 5,
    margin: 5, 
  }
});
