import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DashboardScreen from '../screens/DashboardScreen';
import {Image} from 'native-base';

type RootTabParamList = {
  Home: undefined;
  Home1: undefined;
  Home2: undefined;
  Home3: undefined;
  Home4: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#171819',
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#A2A3A3',
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/Shiga.png')}
              style={{
                width: 20,
                height: 20,
              }}
              alt="logo-icon"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home4"
        component={DashboardScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="clock" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Home1"
        component={DashboardScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="search-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Home2"
        component={DashboardScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="card" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Home3"
        component={DashboardScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
