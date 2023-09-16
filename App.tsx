import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './screens/IndexScreen';
import PhoneNumberScreen from './screens/PhoneNumberScreen';
import VerifyCodeScreen from './screens/VerifyCodeScreen';
import ResidenceScreen from './screens/ResidenceScreen';
import DisplayImageScreen from './screens/DisplayImageScreen';
import BottomTabNavigator from './navigation/BottomNavigation';
import IDScreen from './screens/IDScreen';
import {NativeBaseProvider} from 'native-base';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <NativeBaseProvider>
          <Stack.Navigator
            initialRouteName="Index"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Index" component={IndexScreen} />
            <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
            <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
            <Stack.Screen name="Residence" component={ResidenceScreen} />
            <Stack.Screen name="ID" component={IDScreen} />
            <Stack.Screen name="DisplayImage" component={DisplayImageScreen} />
            <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NativeBaseProvider>
      </GestureHandlerRootView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#121212'} />
    </NavigationContainer>
  );
}

export default App;
