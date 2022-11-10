import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import SQLite from 'react-native-sqlite-storage';

import SQLiteHelper from '@app/utils/SQLiteHelper';
const sqliteH = new SQLiteHelper({name: 'tdcore.db', createFromLocation: 1});

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch} from '@app/components';

const MenuScreen = () => {
  const navigation = useNavigation();
  const Reigons = [
    {
      id: '1',
      name: 'Bắc',
    },
    {
      id: '2',
      name: 'Trung',
    },
    {
      id: '3',
      name: 'Nam',
    },
  ];
  const reigon = ({item}) => (
    <View style={styles.item}>
      <View style={styles.reigonContainer}>
        <Image style={styles.food} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.bigContainer}>
      <FlatList data={Reigons} renderItem={reigon} numColumns={4} ListEmptyComponent={<Text>No Reigons Available</Text>} />
    </View>
  );
};

export default MenuScreen;
const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: '#CDF0CD',
    flex: 1,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3,
    padding: 10,
  },
});
