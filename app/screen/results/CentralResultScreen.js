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
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [ngay_quay, setNgay_quay] = useState(1);

  useEffect(() => {
    getResult();
    return () => {};
  }, []);
  const getResult = () => {
    const apiURL = `https://api.xoso.me/app/json-kq-mientrung?name=KQXS&ngay_quay=${ngay_quay}`;
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
        console.log(resJson);
      })
      .catch(error => {
        console.log('Error:', error);
      })
      .finally(() => setIsLoading(false));
  };

  const renderItem = ({item, index}) => {
    return (
      <View> 
        <View style={styles.item}>
          <View style={styles.table}>
            <Text style={styles.b1}>Thành Phố </Text>
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
            <Text style={styles.b1}>{item.provinceName}</Text>
            <Text style={styles.rowdata}>{item.lotData.DB}</Text>
            <Text style={styles.rowdata}>{item.lotData['1']}</Text>
            <Text style={styles.rowdata}>{item.lotData['2'].join('  ')}</Text>
            <Text style={styles.rowdata}>{item.lotData['3'].join('  ')}</Text>
            <Text style={styles.rowdata4}>{item.lotData['4'].join('  ')}</Text>
            <Text style={styles.rowdata}>{item.lotData['5'].join('  ')}</Text>
            <Text style={styles.rowdata}>{item.lotData['6'].join('  ')}</Text>
            <Text style={styles.rowdata}>{item.lotData['7'].join('  ')}</Text>
          </View>
        </View>
        <View style={styles.box0}>
          <View style={styles.box1}>
            <Text style={styles.b3}>Đầu</Text>
            <Text style={styles.b3}>0</Text>
            <Text style={styles.b3}>1</Text>
            <Text style={styles.b3}>2</Text>
            <Text style={styles.b3}>3</Text>
            <Text style={styles.b3}>4</Text>
            <Text style={styles.b3}>5</Text>
            <Text style={styles.b3}>6</Text>
            <Text style={styles.b3}>7</Text>
            <Text style={styles.b3}>8</Text>
            <Text style={styles.b3}>9</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.b3}>Đuôi</Text>
            <Text style={styles.b3}>{item.dau['0'].join(' ')}</Text>
            <Text style={styles.b3}>{item.dau['1'].join(' ')}</Text>
            <Text style={styles.b3}>{item.dau['2'].join(' ')}</Text>
            <Text style={styles.b3}>{item.dau['3'].join(' ')}</Text>
            <Text style={styles.b3}>{item.dau['4'].join(' ')}</Text>
            <Text style={styles.b3}>{item.dau['5'].join(' ')}</Text>
            <Text style={styles.b3}>{item.dau['6'].join(' ')}</Text>
            <Text style={styles.b3}>{item.dau['7'].join(' ')}</Text>
            <Text style={styles.b3}>{item.dau['8'].join(' ')}</Text>
            <Text style={styles.b3}>{item.dau['9'].join(' ')}</Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.b3}>Đầu</Text>
            <Text style={styles.b3}>{item.duoi['0'].join(' ')}</Text>
            <Text style={styles.b3}>{item.duoi['1'].join(' ')}</Text>
            <Text style={styles.b3}>{item.duoi['2'].join(' ')}</Text>
            <Text style={styles.b3}>{item.duoi['3'].join(' ')}</Text>
            <Text style={styles.b3}>{item.duoi['4'].join(' ')}</Text>
            <Text style={styles.b3}>{item.duoi['5'].join(' ')}</Text>
            <Text style={styles.b3}>{item.duoi['6'].join(' ')}</Text>
            <Text style={styles.b3}>{item.duoi['7'].join(' ')}</Text>
            <Text style={styles.b3}>{item.duoi['8'].join(' ')}</Text>
            <Text style={styles.b3}>{item.duoi['9'].join(' ')}</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.b3}>Đuôi</Text>
            <Text style={styles.b3}>0</Text>
            <Text style={styles.b3}>1</Text>
            <Text style={styles.b3}>2</Text>
            <Text style={styles.b3}>3</Text>
            <Text style={styles.b3}>4</Text>
            <Text style={styles.b3}>5</Text>
            <Text style={styles.b3}>6</Text>
            <Text style={styles.b3}>7</Text>
            <Text style={styles.b3}>8</Text>
            <Text style={styles.b3}>9</Text>
          </View>
        </View>
      </View>
    );
  };

  const route = useRoute();
  return (
    <View style={{flex: 1, backgroundColor: '#D1F5FA'}}>
      <ScrollView>
        <TDHeader
          title={'Xổ Số Miền Trung'}
          leftComponentOnPress={() => {
            navigation.goBack();
          }}
        />
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <TextInput style={styles.textInput} type="text" value={ngay_quay} onChangeText={value => setNgay_quay(value)} />
          <FlatList data={data} renderItem={renderItem} keyExtractor={item => `key-${item.id}`} 
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CentralResultScreen;
const styles = StyleSheet.create({
  b1: {
    textAlign: 'center',
    margin: 2,
    fontSize: 15,
    color: '#E97777',
  },
  item: {
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'cyan',
    flexDirection: 'row',
    margin: 10,
    padding: 10,
  },
  table: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  rowdata: {
    textAlign: 'center',
    padding: 10,
    margin: 10,
    color: '#EBDA13',
  },
  rowdata4: {
    textAlign: 'center',
    padding: 10,
    margin: 10,
    color: '#EBDA13',
    width: Dimensions.get('window').width / 2,
  },
  row: {
    padding: 10,
    margin: 11,
    color: '#D1AB8C',
  },
  box1: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  box2: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  box0: {
    borderWidth: 1,
    borderColor: 'cyan',
    padding: 10,
    margin: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  b3: {
    textAlign: 'center',
    margin: 5,
    padding: 3,
    fontSize: 15,
    color: '#0C7B93',
  },
  box3: {
    flexDirection: 'column',
  },
  box4: {
    flexDirection: 'column',
  },
  textInput: {
    borderWidth: 1,
    width: 100,
    justifyContent: 'center',
    borderColor: '#FFA9A3'
  },
});
