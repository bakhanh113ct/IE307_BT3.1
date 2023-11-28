import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import FavoriteScreen from './FavoriteScreen';
import CategoryScreen from './Categories/CategoryScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeMainScreen from './Home/HomeMainScreen';
import {Badge} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
const Tab = createBottomTabNavigator();
//20521450 - Nguyen Ba Khanh

const MainPage = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focus, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Categories':
              iconName = 'grid';
              break;
            case 'Favorite':
              iconName = 'heart';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            default:
              iconName = 'home';
          }
          if (iconName == 'heart')
            return (
              <View style={styles.iconContainer}>
                <Icon
                  name={iconName}
                  size={size}
                  color={color}
                  style={{right: -6}}
                />
                <Badge style={styles.badge} size={16}>
                  1
                </Badge>
              </View>
            );
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#679dda',
        tabBarInactiveTintColor: 'black',
        // headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeMainScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Categories" component={CategoryScreen} />

      <Tab.Screen name="Favorite" component={FavoriteScreen} />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  badge: {
    top: -10,
    left: -5,
  },
  iconContainer: {
    flexDirection: 'row',
    position: 'absolute',
  },
});

export default MainPage;
