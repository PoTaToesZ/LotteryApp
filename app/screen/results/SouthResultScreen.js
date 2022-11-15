import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch,TDHeader} from '@app/components';

const SouthResultScreen = () => {
  const navigation = useNavigation();
  const Ketqua = [
    {
      id: '1',
      place: 'ĐB',
      number: '003081                                              ',
    },
    {
      id: '2',
      place: '1',
      number: '49805                                               ',
    },
    {
      id: '3',
      place: '2',
      number: '60161                                               ',
    },
    {
      id: '4',
      place: '3',
      number: '49356    66430                                       ',
    },
    {
      id: '5',
      place: '4',
      number: ' 22637    08305   36919   54926   52147   93432   60378',
    },
    {
      id: '6',
      place: '5',
      number: '3776                                               ',
    },
    {
      id: '7',
      place: '6',
      number: '1227     7470    8561                                  ',
    },
    {
      id: '8',
      place: '7',
      number: '267                                                ',
    },
    {
        id: '9',
        place: '8',
        number: '74                                                 ',
      },
  ];

  const south = ({item}) => (
    <View style={styles.item}>
        <Text style={styles.place}>{item.place}</Text>
        <Text style={styles.number}>{item.number}</Text>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor:'#CDF0CD'}}>
       <TDHeader
        title={'Xổ Số Miền Nam'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
    <View style={styles.bigContainer}>
      <FlatList data={Ketqua} renderItem={south} numColumns={1} ListEmptyComponent={<Text>No Reigons Available</Text>} />
    </View>
    </View>
  );
};

export default SouthResultScreen;
const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: '#CDF0CD',
    paddingTop: 50
  },
  item:{
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    borderWidth: 0.5, 
    borderColor: 'cyan', 
  },
  number:{
    fontSize: 14,
    color: 'black'
  },
  place:{
    fontSize: 14,
    color: 'black'
  }
})

