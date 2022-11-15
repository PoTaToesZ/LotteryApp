import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Image, FlatList, Dimensions, Linking } from 'react-native';
import React from 'react'

const PredictScreen = () => {
  return (
    <ScrollView style={{flex:1, backgroundColor: '#FAF7F0'}}>
    <Image source={require('@app/assets/images/thuexoso.jpg')} style = {styles.Img}/>
      <Text style={{ color: 'blue', marginLeft: 120, bottom: 95 }}
        onPress={() => Linking.openURL('https://www.minhngoc.net.vn/tin-tuc/57-thue-thu-nhap-trung-xo-so-bao-nhieu-phan-tram.html')}>
        Thuế thu nhập trúng xổ số bao nhiêu phần trăm?</Text>
        <Image source={require('@app/assets/images/preimg1.jpg')} style = {styles.Img}/>
      <Text style={{ color: 'blue', marginLeft: 120, bottom: 95 }}
        onPress={() => Linking.openURL('https://www.minhngoc.net.vn/tin-tuc/50-nghi-dinh-78-2012-nd-cp-ve-kinh-doanh-xo-so.html')}>
        Nghị định 78/2012/NĐ-CP về kinh doanh xổ số</Text>
        <Image source={require('@app/assets/images/preimg2.png')} style = {styles.Img}/>
      <Text style={{ color: 'blue', marginLeft: 120, bottom: 95 }}
        onPress={() => Linking.openURL('https://www.minhngoc.net.vn/tin-tuc/47-thay-doi-gio-mo-thuong-xo-so-mien-bac.html')}>
        Thay đổi giờ mở thưởng Xổ số Miền Bắc</Text>
        <Image source={require('@app/assets/images/preimg3.jpg')} style = {styles.Img}/>
      <Text style={{ color: 'blue', marginLeft: 120, bottom: 95 }}
        onPress={() => Linking.openURL('https://www.minhngoc.net.vn/tin-tuc/46-doi-so-trung-dac-biet-o-dau-thu-tuc-nhu-the-nao.html')}>
        ĐỔI SỐ TRÚNG ĐẶC BIỆT Ở ĐÂU & THỦ TỤC NHƯ THẾ NÀO?</Text>
        <Image source={require('@app/assets/images/preimg4.png')} style = {styles.Img}/>
      <Text style={{ color: 'blue', marginLeft: 120, bottom: 95 }}
        onPress={() => Linking.openURL('https://www.minhngoc.net.vn/tin-tuc/35-khuyen-cao-khi-doi-so-trung.html')}>
        KHUYẾN CÁO KHI ĐỔI SỐ TRÚNG</Text>
        <Image source={require('@app/assets/images/preimg5.jpg')} style = {styles.Img}/>
      <Text style={{ color: 'blue', marginLeft: 120, bottom: 95 }}
        onPress={() => Linking.openURL('https://www.minhngoc.net.vn/tin-tuc/23-muc-chi-hoa-hong-dai-ly-xo-so.html')}>
        Mức chi hoa hồng đại lý xổ số</Text>
    </ScrollView>
  )
}

export default PredictScreen

const styles = StyleSheet.create({
    Img:{ 
        height: 100,
        width: 100,
        marginLeft: 10,
        marginTop: 10
    },
});