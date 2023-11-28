import React, {useState} from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from './pages/MainPage';
import 'react-native-gesture-handler';
import HomeDetailScreen from './pages/Home/HomeDetailScreen';
import NotificationDetailScreen from './pages/Notifications/NotificationDetailScreen';
//20521450-Nguyen Ba Khanh

const Stack = createNativeStackNavigator();
export const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState({
    email: 'a',
    password: 'a',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    // <Lab1_2 />
    <UserContext.Provider
      value={[user, setUser, isAuthenticated, setIsAuthenticated]}>
      <NavigationContainer>
        {isAuthenticated == false ? (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={SignUpPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HomeDetail"
              component={HomeDetailScreen}
            />
            <Stack.Screen
              name="NotificationDetail"
              component={NotificationDetailScreen}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
