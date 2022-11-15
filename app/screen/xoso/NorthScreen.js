import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch,TDHeader} from '@app/components';

const NorthScreen = () => {
    const navigation = useNavigation();

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
            <TouchableOpacity onPress={() => {navigation.navigate('NorthResultScreen', {date: item.name})}}>
          <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      );
  return (
    <View style={{ backgroundColor: '#D1F5FA', flex:1}}>
        <TDHeader
        title={'Xổ Số Miền Bắc'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
        <FlatList data={NorthDay} renderItem={ndiw} numColumns={4} ListEmptyComponent={<Text>No Reigons Available</Text>} />
      <Text>NorthScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NorthResultScreen');
        }}>
        <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>North Result Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NorthScreen
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