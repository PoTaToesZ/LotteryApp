import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch} from '@app/components';

const MenuScreen = () => {
  const navigation = useNavigation();
  const Reigons = [
    {
      id: '1',
      name: 'Bắc',
      image: require('@app/assets/images/north.png'),
    },
    {
      id: '2',
      name: 'Trung',
      image: require('@app/assets/images/central.png'),
    },
    {
      id: '3',
      name: 'Nam',
      image: require('@app/assets/images/south.png'),
    },
    {
      id: '4',
      name: 'Vietllot',
      image: require('@app/assets/images/vietllot.png'),
    },
    {
      id: '5',
      name: 'Lịch Quay',
      image: require('@app/assets/images/calendar.jpg'),
    },
    {
      id: '6',
      name: 'Dự Báo',
      image: require('@app/assets/images/predict.jpg'),
    },
  ];
  const reigon = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity >
        <View>
          <Text>Param</Text>
          <Image source={item.image} style={styles.reigons} />
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.bigContainer}>
      <FlatList data={Reigons} renderItem={reigon} numColumns={3} ListEmptyComponent={<Text>No Reigons Available</Text>} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NorthScreen');
        }}>
        <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>Move North Screen Temp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SouthScreen');
        }}>
        <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>Move South Screen Temp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NorthResultScreen');
        }}>
        <Text style={{color: Colors.primary, fontSize: 16, fontWeight: 'bold'}}>North Result Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuScreen;
const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: '#CDF0CD',
    paddingTop: 150,
    flex: 1,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3,
    padding: 15,
  },
  reigons: {
    height: 120,
    width: 120,
  },
  name: {
    textAlign: 'center',
    fontSize: 19,
    color: 'black',
  },
});
