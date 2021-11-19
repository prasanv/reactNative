import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewdetails';
import Header from '../shared/header';
import React from 'react'


const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,}
    },
  },
  Review: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    },
  },
}

const homeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#bbb', height: 90, }
  }
});

export default homeStack;
