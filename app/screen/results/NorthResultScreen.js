import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute } from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch,TDHeader} from '@app/components';

const NorthResultScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const Ketqua = [
    {
      id: '1',
      place: 'ĐB',
      number: '71610                                              ',
    },
    {
      id: '2',
      place: '1',
      number: '89551                                              ',
    },
    {
      id: '3',
      place: '2',
      number: '25825      57592                                   ',
    },
    {
      id: '4',
      place: '3',
      number: '04061      27766     63457     55406     80996     71332   ',
    },
    {
      id: '5',
      place: '4',
      number: '4220     8664      4267      0323                      ',
    },
    {
      id: '6',
      place: '5',
      number: '1489     4707      5990      1175      9767      6607        ',
    },
    {
      id: '7',
      place: '6',
      number: '536      385     828                                    ',
    },
    {
      id: '8',
      place: '7',
      number: '32     64      98      25                                  ',
    },
  ];

  const north = ({item}) => (
    <View style={styles.item}>
        <Text style={styles.place}>{item.place}</Text>
        <Text style={styles.number}>{item.number}</Text>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor:'#CDF0CD'}}>
       <TDHeader
        title={route.params.date}
        leftComponentOnPress={() => {
          navigation.goBack();
        }}
      />
    <View style={styles.bigContainer}>
      <FlatList data={Ketqua} renderItem={north} numColumns={1} ListEmptyComponent={<Text>No Reigons Available</Text>} />
    </View>
    </View>
  );
};

export default NorthResultScreen;
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

