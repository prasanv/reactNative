/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';

const Drawer = createDrawerNavigator();

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

function FeedScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const drawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FeedScreen" component={FeedScreen} />
      <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default drawerNavigation;
