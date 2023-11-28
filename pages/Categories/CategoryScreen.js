import {View, Text} from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Category1 from './Category1';
import Category2 from './Category2';
import Category3 from './Category3';
const Tab = createMaterialTopTabNavigator();
//20521450-Nguyen Ba Khanh

const CategoryScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Category1" component={Category1} />
      <Tab.Screen name="Category2" component={Category2} />
      <Tab.Screen name="Category3" component={Category3} />

    </Tab.Navigator>
  );
};

export default CategoryScreen;
