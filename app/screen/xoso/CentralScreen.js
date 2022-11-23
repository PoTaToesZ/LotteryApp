import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch,TDHeader} from '@app/components';

const CentralScreen = () => {
    const navigation = useNavigation();
    const [ngay_quay, setNgay_quay] = useState(1);
    const [data, setData] = useState();
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
    const NorthDay=[
        {
            id:'1',
            name: 'Monday'
        },
        {
            id:'2',
            name: 'Tuesday'
        },
        {
            id:'3',
            name: 'Wednesday'
        },
        {
            id:'4',
            name: 'Thursday'
        },
        {
            id:'5',
            name: 'Friday'
        },
        {
            id:'6',
            name: 'Saturday'
        },
        {
            id:'7',
            name: 'Sunday'
        },
        {
            id:'9',
            name: '#######'
        },
    ]
    const ndiw = ({item}) => (
        <View style={styles.item}>
            <TouchableOpacity>
          <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      );
  return (
    <View style={{ backgroundColor: '#83BCFF', flex:1}}>
        <TDHeader
        title={'Xổ Số Miền Trung'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
        <FlatList data={NorthDay} renderItem={ndiw} numColumns={4} ListEmptyComponent={<Text>No Reigons Available</Text>} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CentralResultScreen');
        }}
        >
        <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>Central Result Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CentralScreen
const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        width: Dimensions.get('window').width / 4,
        padding: 20,
    },
    name:{
        fontSize: 12,
        color: 'black'
    }
})