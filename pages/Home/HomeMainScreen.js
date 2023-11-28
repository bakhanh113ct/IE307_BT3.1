import {View, Text, Button} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import NotificationScreen from '../Notifications/NotificationScreen';
import HelpsScreen from '../HelpsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
//20521450-Nguyen Ba Khanh
const Drawer = createDrawerNavigator();

const HomeMainScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <View style={{flexDirection: 'row'}}>
              <Icon name="notifications" size={size} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Helps"
        component={HelpsScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="help-circle"
              size={size}
              color={focused ? '#7cc' : '#ccc'}/>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeMainScreen;