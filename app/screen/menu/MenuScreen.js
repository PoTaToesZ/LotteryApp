import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch} from '@app/components';

const MenuScreen = () => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('screen');

  // const Reigons = [
  //   {
  //     id: '1',
  //     name: 'Bắc',
  //     image: require('@app/assets/images/north.png'),
  //   },
  //   {
  //     id: '2',
  //     name: 'Trung',
  //     image: require('@app/assets/images/central.png'),
  //   },
  //   {
  //     id: '3',
  //     name: 'Nam',
  //     image: require('@app/assets/images/south.png'),
  //   },
  //   {
  //     id: '4',
  //     name: 'Vietllot',
  //     image: require('@app/assets/images/vietllot.png'),
  //   },
  //   {
  //     id: '5',
  //     name: 'Lịch Quay',
  //     image: require('@app/assets/images/calendar.jpg'),
  //   },
  //   {
  //     id: '6',
  //     name: 'Dự Báo',
  //     image: require('@app/assets/images/predict.jpg'),
  //   },
  // ];
  // const reigon = ({item}) => (
  //   <View style={styles.item}>
  //     <TouchableOpacity >
  //       <View>
  //         <Text>Param</Text>
  //         <Image source={item.image} style={styles.reigons} />
  //       </View>
  //       <Text style={styles.name}>{item.name}</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
  return (
    <View style={styles.bigContainer}>
      {/* <FlatList data={Reigons} renderItem={reigon} numColumns={3} ListEmptyComponent={<Text>No Reigons Available</Text>} /> */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('NorthScreen');
        }}>
          <Image source={require('@app/assets/images/north.png')} style={styles.northImg} />
          <Text style={styles.northTxt}>Bắc</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('CentralScreen');
        }}>
          <Image source={require('@app/assets/images/central.png')} style={styles.centralImg} />
          <Text style={styles.centralTxt}>Trung</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('SouthScreen');
        }}>
          <Image source={require('@app/assets/images/south.png')} style={styles.southImg} />
          <Text style={styles.southTxt}>Nam</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('VietllotScreen');
        }}>
          <Image source={require('@app/assets/images/vietllot.png')} style={styles.northImg} />
          <Text style={styles.northTxt}>Vietllot</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('CalendarScreen');
        }}>
          <Image source={require('@app/assets/images/calendar.jpg')} style={styles.centralImg} />
          <Text style={styles.centralTxt}>Lịch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('PredictScreen');
        }}>
          <Image source={require('@app/assets/images/predict.jpg')} style={styles.southImg} />
          <Text style={styles.southTxt}>Dự đoán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuScreen;
const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: '#CDF0CD',
    paddingTop: 160,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  northImg: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  centralImg: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  southImg: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  northTxt: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 15,
  },
  centralTxt: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 15,
  },
  southTxt: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 15,
  },
});
