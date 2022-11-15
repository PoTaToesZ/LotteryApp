import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import AppBottomTab from './AppBottomTab';

import {ListLoaiDichVuScreen} from '@app/screen/loaidichvu';
import {MenuScreen, CalendarScreen,PredictScreen,VietllotScreen} from '@app/screen/menu';
import {NorthScreen,CentralScreen,SouthScreen} from '@app/screen/xoso';
import {NorthResultScreen,CentralResultScreen,SouthResultScreen} from '@app/screen/results';


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
      <Stack.Screen name="NorthScreen" component={NorthScreen} />
      <Stack.Screen name="CentralScreen" component={CentralScreen} />
      <Stack.Screen name="SouthScreen" component={SouthScreen} />
      <Stack.Screen name="NorthResultScreen" component={NorthResultScreen} />
      <Stack.Screen name="CentralResultScreen" component={CentralResultScreen} />
      <Stack.Screen name="SouthResultScreen" component={SouthResultScreen} />

    </Stack.Navigator>
  );
};

export default AppStack;
