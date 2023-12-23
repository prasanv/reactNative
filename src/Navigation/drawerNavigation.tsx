import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from '../screens/about';
import Contact from '../screens/contact';

const Drawer = createDrawerNavigator();

const drawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
};

export default drawerNavigation;
