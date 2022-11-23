import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppBottomTab from './AppBottomTab';

import {ListLoaiDichVuScreen} from '@app/screen/loaidichvu';
import {VietllotMenuScreen,MenuScreen, CalendarScreen,PredictScreen,VietllotScreen} from '@app/screen/menu';
import {NorthScreen,CentralScreen,SouthScreen} from '@app/screen/xoso';
import {PowerDetailScreen,VietllotPowerScreen,Max3DScreen,Max4DScreen,NorthResultScreen,CentralResultScreen,SouthResultScreen,VietllotDetailScreen} from '@app/screen/results';


const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={AppBottomTab} />
      <Stack.Screen name="ListLoaiDichVuScreen" component={ListLoaiDichVuScreen} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="PredictScreen" component={PredictScreen} />
      <Stack.Screen name="VietllotScreen" component={VietllotScreen} />
      <Stack.Screen name="VietllotMenuScreen" component={VietllotMenuScreen} />
      <Stack.Screen name="VietllotDetailScreen" component={VietllotDetailScreen} />
      <Stack.Screen name="NorthResultScreen" component={NorthResultScreen} />
      <Stack.Screen name="CentralResultScreen" component={CentralResultScreen} />
      <Stack.Screen name="SouthResultScreen" component={SouthResultScreen} />
      <Stack.Screen name="VietllotPowerScreen" component={VietllotPowerScreen} />
      <Stack.Screen name="Max3DScreen" component={Max3DScreen} />
      <Stack.Screen name="Max4DScreen" component={Max4DScreen} />
      <Stack.Screen name="PowerDetailScreen" component={PowerDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
