import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions, Linking } from 'react-native';
import React from 'react'

const PredictScreen = () => {
  return (
    <ScrollView style={{flex:1, backgroundColor: '#FAF7F0'}}>
    <Image source={require('@app/assets/images/preimg1.jpg')} style = {styles.Img}/>
      <Text style={{ color: 'blue', marginLeft: 130, bottom: 95 }}
        onPress={() => Linking.openURL('https://ketqua.me/nam-mo-thay-noi-chuyen-voi-nguoi-da-chet-tt216')}>
        Nằm mơ thấy nói chuyện với người đã chết: Giải mã ý nghĩa và con số may mắn</Text>
        <Image source={require('@app/assets/images/preimg2.jpg')} style = {styles.Img}/>
      <Text style={{ color: 'blue', marginLeft: 130, bottom: 95 }}
        onPress={() => Linking.openURL('https://ketqua.me/mo-thay-nguoi-chet-duoi-tt215')}>
        Mơ thấy người chết đuối là điềm lành day dữ? Đánh con gì để trúng?</Text>
        <Image source={require('@app/assets/images/preimg4.jpg')} style = {styles.Img}/>
      <Text style={{ color: 'blue', marginLeft: 130, bottom: 95 }}
        onPress={() => Linking.openURL('https://ketqua.me/mo-thay-nguoi-chet-song-lai-tt213')}>
        Mơ thấy người chết sống lại là điềm gì? Đánh con gì cho may mắn?</Text>
        <Image source={require('@app/assets/images/preimg5.jpg')} style = {styles.Img}/>
      <Text style={{ color: 'blue', marginLeft: 130, bottom: 95 }}
        onPress={() => Linking.openURL('https://ketqua.me/mo-thay-minh-chet-tt212')}>
        Mơ thấy mình chết: Ý nghĩa giấc mơ và con số may mắn</Text>
        <Image source={require('@app/assets/images/preimg6.jpg')} style = {styles.Img}/>
      <Text style={{ color: 'blue', marginLeft: 130, bottom: 95 }}
        onPress={() => Linking.openURL('https://ketqua.me/mo-thay-nguoi-da-mat-tt211')}>
        Mơ thấy người đã mất là điềm gì? Mơ thấy người đã mất đánh con gì?</Text>
    </ScrollView>
  )
}

export default PredictScreen

const styles = StyleSheet.create({
    Img:{ 
        height: 110,
        width: 110,
        marginLeft: 10,
        marginTop: 10
    },
});