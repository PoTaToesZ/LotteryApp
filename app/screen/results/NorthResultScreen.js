import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
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
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataHead, setDataHead] = useState([]);
  const [dataTail, setDataTail] = useState([]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getResult();
    return () => {};
  }, [date]);
  const getResult = () => {
    const apiURL = `https://api.xoso.me/app/json-kq-mienbac?name=KQXS&v=2&ngay_quay=${moment(date).format('YYYY-MM-DD')}`;
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson.data.lotData);
        setDataHead(resJson.data.dau);
        setDataTail(resJson.data.duoi);
      })
      .catch(error => {
        console.log('Error:', error);
      })
      .finally(() => setIsLoading(false));
  };
  const handleData = data => {
    let dataSource = [];
    for (let item in data) {
      dataSource.push({
        position: item,
        result: data[item].join('     '),
      });
    }
    return dataSource;
  };
  let dataLotData = handleData(data);
  //console.log(dataLotData);
  let dataHeadProcess = handleData(dataHead);
  let dataTailProcess = handleData(dataTail);

  return (
    <ScrollView style={{backgroundColor: '#B9E6FF'}}>
      <TDHeader
        title={'Xổ Số Miền Bắc'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
      <TouchableOpacity
        style={{backgroundColor: '#fff', borderRadius: 20, width: 100, marginLeft: 160}}
        onPress={() => setOpen(true)}>
        <Text style={styles.chooseDate}>{moment(date).format('YYYY-MM-DD')}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <View style={styles.container1}>
        {dataLotData.map(i => {
          var d = i.result.split('').map(e => parseInt(e));
          var e = i.result.split('').map(e => parseInt(e));
          return (
            <View style={styles.boxData1}>
              <Text style={styles.kq}>{i.position}</Text>
              <Text style={styles.data1}>{i.result}</Text>
            </View>
          );
        })}
      </View>
      <View>
        <View style={styles.container2}>
          <View style={{marginTop: 20}}>
            <Text style={styles.title}>Đầu</Text>
            {dataHeadProcess.map(item => {
              return (
                <View style={styles.boxData2}>
                  <Text style={styles.place}>{item.position}</Text>
                  <Text style={styles.data2}>{item.result}</Text>
                </View>
              );
            })}
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.title}>Đuôi</Text>
            {dataTailProcess.map(item => {
              return (
                <View style={styles.boxData2}>
                  <Text style={styles.place}>{item.position}</Text>
                  <Text style={styles.data2}>{item.result}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NorthResultScreen;
const styles = StyleSheet.create({
  chooseDate: {
    textAlign: 'center',
  },
  container1: {
    marginTop: 20,
  },
  container2: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxData1: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    alignItems: 'center',
  },
  data1: {
    width: Dimensions.get('window').width / 2,
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
  kq: {
    fontSize: 16,
    color: 'black',
    width: Dimensions.get('window').width / 4,
    textAlign: 'center',
  },
  boxData2: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  place: {
    textAlign: 'center',
    paddingRight: 10,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    paddingLeft: 10,
  },
  data2: {
    textAlign: 'center',
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
