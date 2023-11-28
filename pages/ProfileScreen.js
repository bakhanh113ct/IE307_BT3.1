import {View, Text, Button} from 'react-native';
import React from 'react';
import { UserContext } from '../App';
//20521450 - Nguyen Ba Khanh

const ProfileScreen = ({navigation}) => {
  const [user, setUser, isAuthenticated, setIsAuthenticated] =
    React.useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>ProfileScreen</Text>
      <Button
        title="Logout"
        onPress={() => {
          setIsAuthenticated(false);
        }}></Button>
    </View>
  );
};

export default ProfileScreen;
