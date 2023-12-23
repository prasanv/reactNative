import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/dashboard';
import Settings from '../screens/settings';

const Drawer = createDrawerNavigator();

const drawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Settings"
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
          title: 'My Dashboard',
          drawerLabel: 'Dashboard Label',
        }}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default drawerNavigation;
