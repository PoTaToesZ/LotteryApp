import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch,TDHeader} from '@app/components';

const CentralResultScreen = () => {
  const navigation = useNavigation();
  const Ketqua = [
    {
      id: '1',
      place: 'ĐB',
      number: '071817                                              ',
    },
    {
      id: '2',
      place: '1',
      number: '50207                                               ',
    },
    {
      id: '3',
      place: '2',
      number: '74618                                              ',
    },
    {
      id: '4',
      place: '3',
      number: '88895    51652                                     ',
    },
    {
      id: '5',
      place: '4',
      number: '49183    34667   48371   30306   60120   38104   19207 ',
    },
    {
      id: '6',
      place: '5',
      number: '8180                                              ',
    },
    {
      id: '7',
      place: '6',
      number: '7569    5629    0448                                 ',
    },
    {
      id: '8',
      place: '7',
      number: '801                                              ',
    },
    {
        id: '9',
        place: '8',
        number: '18                                               ',
      },
  ];

  const central = ({item}) => (
    <View style={styles.item}>
        <Text style={styles.place}>{item.place}</Text>
        <Text style={styles.number}>{item.number}</Text>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor:'#CDF0CD'}}>
       <TDHeader
        title={'Xổ Số Miền Trung'}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
    <View style={styles.bigContainer}>
      <FlatList data={Ketqua} renderItem={central} numColumns={1} ListEmptyComponent={<Text>No Reigons Available</Text>} />
    </View>
    </View>
  );
};

export default CentralResultScreen;
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

