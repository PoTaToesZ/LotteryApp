import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
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

const SouthResultScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ngay_quay, setNgay_quay] = useState(1);

  useEffect(() => {
    getResult();
    return () => {};
  }, []);
  const getResult = () => {
    const apiURL = `https://api.xoso.me/app/json-kq-miennam?name=KQXS&ngay_quay=${ngay_quay}`;
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
      })
      .catch(error => {
        console.log('Error:', error);
      })
      .finally(() => setIsLoading(false));
  };

  const renderItem = ({item, index}) => {
    return (
      <SafeAreaView>
        <View style={styles.item}>
          
          <View style={styles.table}>
            <Text style={styles.b1}>Thành Phố: </Text>
            <Text style={styles.b1}>ĐB</Text>
            <Text style={styles.b1}>1</Text>
            <Text style={styles.b1}>2</Text>
            <Text style={styles.b1}>3</Text>
            <Text style={styles.b1}>4</Text>
            <Text style={styles.b1}>5</Text>
            <Text style={styles.b1}>6</Text>
            <Text style={styles.b1}>7</Text>
          </View>
          <View style={styles.table1}>
            <Text style={styles.b1}>{item.provinceName}</Text>
            <Text style={styles.b1}>{item.lotData.DB}</Text>
            <Text style={styles.b1}>{item.lotData['1']}</Text>
            <Text style={styles.b1}>{item.lotData['2']}</Text>
            <Text style={styles.b1}>{item.lotData['3'].join('   ')}</Text>
            <Text style={styles.b2}>{item.lotData['4'].join('   ')}</Text>
            <Text style={styles.b1}>{item.lotData['5']}</Text>
            <Text style={styles.b1}>{item.lotData['6'].join('   ')}</Text>
            <Text style={styles.b1}>{item.lotData['7']}</Text>
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
        
      </SafeAreaView>
    );
  };

  const route = useRoute();
  return (
    <View style={{backgroundColor: '#D1F5FA', flex: 1}}>
      <ScrollView>
        <TDHeader
          title={'Xổ Số Miền Nam'}
          leftComponentOnPress={() => {
            navigation.goBack();
          }}
        />
        <View>
        <TextInput style={styles.textInput} type="text" value={ngay_quay} onChangeText={value => setNgay_quay(value)} />
          <FlatList data={data} renderItem={renderItem} keyExtractor={item => `key-${item.id}`} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SouthResultScreen;
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'cyan',
    padding: 5,
    margin: 5,
  },
  table: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  table1: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 50,
  },
  b1: {
    textAlign: 'center',
    margin: 2,
    fontSize: 15,
    color: '#E97777',
  },
  b2: {
    width: Dimensions.get('window').width / 2,
    textAlign: 'center',
    margin: 1,
    fontSize: 15,
    color: '#E97777',
    margin: 2,
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
  box0:{
    borderWidth: 1,
    borderColor: 'cyan',
    padding: 5,
    margin: 5,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  b3:{
    textAlign: 'center',
    margin: 5,
    padding: 3,
    fontSize: 15,
    color: '#BA94D1'
  },
  box3: {
    flexDirection: 'column',
  },
  box4: {
    flexDirection: 'column',
  },
  textInput: {
    borderWidth: 1,
  },
});
