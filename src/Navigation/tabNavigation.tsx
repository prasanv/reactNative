import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';
import Settings from '../screens/settings';
import StackNavigation from './stackNavigation';
// import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="main"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {position: 'absolute'},
        tabBarItemStyle: {
          borderColor: 'black',
          borderWidth: 1,
        },
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: 'grey',
        tabBarInactiveBackgroundColor: 'white',
        tabBarLabelPosition: 'beside-icon',
        tabBarBadgeStyle: {backgroundColor: 'lightblue'},
      }}>
      <Tab.Screen
        name="Stack"
        component={StackNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarBadge: 4,
          //   tabBarIcon: ({color}) => (
          //     <Ionicons name="home" size={32} color={color} />
          //   ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
