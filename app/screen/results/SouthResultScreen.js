import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DatePicker from 'react-native-date-picker';
import {ActivityIndicator, RadioButton} from 'react-native-paper';
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

const SouthResultScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
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
    const apiURL = `https://api.xoso.me/app/json-kq-miennam?name=KQXS&v=2&ngay_quay=${moment(date).format('YYYY-MM-DD')}`;
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        var a = [];
        var b = [];
        var c = [];
        resJson.data.forEach(element => {
          let dataProcess = handleData(element.lotData, element.provinceCode);
          let dataHeadProcess = handleData(element.dau, element.provinceCode);
          let dataTailProcess = handleData(element.duoi, element.provinceCode);
          a.push({name: element.provinceName, dataProcess: dataProcess});
          b.push({name: element.provinceName, dataHeadProcess: dataHeadProcess});
          c.push({name: element.provinceName, dataTailProcess: dataTailProcess});
        });
        setData(a);
        setDataHead(b);
        setDataTail(c);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
      .finally(() => setIsLoading(false));
  };
  const handleData = (data, code) => {
    let dataSource = [];
    for (let item in data) {
      dataSource.push({
        code: code,
        position: item,
        result: data[item].join('     '),
      });
    }
    // #C3E991
    return dataSource;
  };

  return (
      <ScrollView style={{backgroundColor: '#C3E991'}}>
        <TDHeader
          title={'Xổ Số Miền Nam'}
          leftComponentOnPress={() => {
            navigation.goBack();
          }}
        />
        <TouchableOpacity style={{backgroundColor: '#fff', borderRadius: 20, width: 100, marginLeft: 160}} onPress={() => setOpen(true)}>
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
        <View>
          {data.length > 0 &&
            data.map(item => (
              <View>
                <Text style={styles.nameTitle1}>{item.name}</Text>
                {item.dataProcess.map(i => {
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
            ))}
        </View>
        <View style={styles.container2}>
        <Text style={styles.title}>Đầu</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            {dataHead.length > 0 &&
              dataHead.map(item => (
                <View>
                  <Text style={styles.nameTitle}>{item.name}</Text>
                  {item.dataHeadProcess.map(i => {
                    return (
                      <View style={styles.boxData2}>
                        <Text style={styles.place}>{i.position}</Text>
                        <Text style={styles.data2}>{i.result}</Text>
                      </View>
                    );
                  })}
                </View>
              ))}
          </View>
        </View>
        <View style={styles.container2}>
        <Text style={styles.title}>Đuôi</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            {dataTail.length > 0 &&
              dataTail.map(item => (
                <View>
                  <Text style={styles.nameTitle}>{item.name}</Text>
                  {item.dataTailProcess.map(i => {
                    return (
                      <View style={styles.boxData2}>
                        <Text style={styles.place}>{i.position}</Text>
                        <Text style={styles.data2}>{i.result}</Text>
                      </View>
                    );
                  })}
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
  );
};

export default SouthResultScreen;
const styles = StyleSheet.create({
  chooseDate: {
    textAlign: 'center',
  },
  container2:{
    marginTop: 10, 
    justifyContent: 'space-around'
  },
  boxData1: {
    backgroundColor: 'white',
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxData2:{
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row', 
    width: Dimensions.get('window').width / 3,

  },
  place:{
    textAlign: 'center',
    justifyContent: 'center',
  },
  data2:{
    textAlign: 'center',
    paddingLeft: 5,
  },
  nameTitle:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nameTitle1:{
    textAlign: 'center', 
    marginVertical: 20, 
    fontSize: 20, 
    fontWeight: 'bold'
  }
});
