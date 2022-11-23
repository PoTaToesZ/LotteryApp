import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, Fonts, Images} from '@app/themes';
import {TDButtonPrimary, TDButtonSecondary, TDDividerWithTitle, TDTextInputAccount, TDTextSearch} from '@app/components';

const VietllotMenuScreen = () => {
    const navigation = useNavigation();
  const {width, height} = Dimensions.get('screen');
  return (
    <View style={styles.bigContainer}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('VietllotScreen');
        }}>
          <Image source={require('@app/assets/images/mega645.png')} style={styles.northImg} />
          <Text style={styles.northTxt}>Mega 6/45</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('VietllotPowerScreen');
        }}>
          <Image source={require('@app/assets/images/power655.png')} style={styles.centralImg} />
          <Text style={styles.centralTxt}>Power 6/55</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Max4DScreen');
        }}>
          <Image source={require('@app/assets/images/max4d.png')} style={styles.northImg} />
          <Text style={styles.northTxt}>Max4D</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Max3DScreen');
        }}>
          <Image source={require('@app/assets/images/max3d.jpg')} style={styles.centralImg} />
          <Text style={styles.centralTxt}>Max3D</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VietllotMenuScreen
const styles = StyleSheet.create({
    bigContainer: {
      backgroundColor: '#CDF0CD',
      paddingTop: 140,
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    },
    northImg: {
      height: 130,
      width: 130,
      borderRadius: 20,
      resizeMode: 'contain'
    },
    centralImg: {
      height: 130,
      width: 130,
      borderRadius: 20,
      resizeMode: 'contain'
    },
    southImg: {
      height: 120,
      width: 120,
      borderRadius: 20,
      resizeMode: 'contain'
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
  