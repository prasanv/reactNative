import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/dashboard';
import TabNavigation from './tabNavigation';

const Drawer = createDrawerNavigator();

const drawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      backBehavior="none"
      screenOptions={{
        drawerStyle: {
          width: 250,
        },
        drawerPosition: 'right',
        drawerStatusBarAnimation: 'fade',
        // drawerType: 'permanent',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: 'grey',
        drawerContentContainerStyle: {
          backgroundColor: 'white',
        },
        drawerContentStyle: {
          backgroundColor: 'lightgrey',
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Prasan's Dashboard",
          drawerLabel: 'My Dashboard',
        }}
      />
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigation}
        options={{
          headerShown: false,
          drawerLabel: 'Main',
        }}
      />
    </Drawer.Navigator>
  );
};

export default drawerNavigation;
