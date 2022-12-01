import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch} from '@app/components';

const MenuScreen = () => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('screen');
  return (
    <View style={styles.bigContainer}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('NorthResultScreen');
        }}>
          <Image source={require('@app/assets/images/north.png')} style={styles.northImg} />
          <Text style={styles.northTxt}>Bắc</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('CentralResultScreen');
        }}>
          <Image source={require('@app/assets/images/central.png')} style={styles.centralImg} />
          <Text style={styles.centralTxt}>Trung</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('SouthResultScreen');
        }}>
          <Image source={require('@app/assets/images/south.png')} style={styles.southImg} />
          <Text style={styles.southTxt}>Nam</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('VietllotMenuScreen');
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
