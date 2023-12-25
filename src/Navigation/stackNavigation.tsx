/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Home from '../screens/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../screens/about';
import Contact from '../screens/contact';
import {Pressable, Text} from 'react-native';

const Stack = createNativeStackNavigator();

const StackNavigation = ({navigation}: any) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#6a51ae'},
        headerTintColor: 'white',
        headerTitleStyle: {fontWeight: 'bold'},

        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => (
          <Pressable onPress={() => navigation.toggleDrawer()}>
            <Text style={{color: 'white', fontSize: 16}}>Menu</Text>
          </Pressable>
        ),
        contentStyle: {backgroundColor: '#e8e4f3'},
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Stack home', // Setting the header title
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={({route}) => ({title: `About ${route?.params?.name}`})}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        initialParams={{
          country: 'Canada',
          province: 'BC',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
