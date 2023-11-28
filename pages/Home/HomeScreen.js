import { View, Text, Button } from 'react-native'
import React from 'react'
//20521450-Nguyen Ba Khanh

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>HomeScreen</Text>
      <Button title="GO TO DETAILS" onPress={() => {
        navigation.push('HomeDetail')
      }} />
    </View>
  )
}

export default HomeScreen