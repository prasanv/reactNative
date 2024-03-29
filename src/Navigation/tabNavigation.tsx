import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../screens/tabNavigation/Main';
import Settings from '../screens/tabNavigation/settings';
import StackNavigation from './stackNavigation';
import {Pressable, Text} from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = ({navigation}: any) => {
  console.log({navigation});
  return (
    <Tab.Navigator
      initialRouteName="Main"
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
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => (
          <Pressable onPress={() => navigation.toggleDrawer()}>
            <Text style={{fontSize: 16, padding: 10}}>Menu</Text>
          </Pressable>
        ),
      }}>
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
      <Tab.Screen
        name="Stack"
        component={StackNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Profile Settings',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
