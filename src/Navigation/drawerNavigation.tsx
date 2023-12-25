import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/drawerNavigation/dashboard';
import TabNavigation from './tabNavigation';
import HelloWorld from '../components/1-helloWorld';
import AlertAPI from '../components/2-alert';
import Styling from '../components/3-styling';
import Flex from '../components/4-flex';
import DimensionsAPI from '../components/6-dimensions';
import DimensionsWithEventListeners from '../components/6-dimensionsEventListener';
import DimensionsHook from '../components/6-dimensionsHook';
import SafeAreaViewAPI from '../components/7-safeAreaView';
import PlatformSpecificCode from '../components/8-platformSpecificCode';
import PokemanCharacters from '../components/9-pokemanChars';
import ListScrollView from '../components/10-listScrollView';
import FlatListView from '../components/11-flatList';
import SectionListView from '../components/12-sectionList';
import InputTextComp from '../components/13-inputText';
import SwitchToggle from '../components/14-switchToggle';
import LoginForm from '../components/15-loginForm';
import PullOnRequest from '../components/16-pullOnRequest';

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
      <Drawer.Screen name="HelloWorld" component={HelloWorld} />
      <Drawer.Screen name="Alert" component={AlertAPI} />
      <Drawer.Screen name="RN Styling" component={Styling} />
      <Drawer.Screen name="RN Flex" component={Flex} />
      <Drawer.Screen name="Dimensions API" component={DimensionsAPI} />
      <Drawer.Screen
        name="Dimensions - Event Listeners"
        component={DimensionsWithEventListeners}
      />
      <Drawer.Screen name="Dimension Hook" component={DimensionsHook} />
      <Drawer.Screen name="SafeAreaView API" component={SafeAreaViewAPI} />
      <Drawer.Screen
        name="Platform Specific Code"
        component={PlatformSpecificCode}
      />
      <Drawer.Screen name="Pokeman Characters" component={PokemanCharacters} />
      <Drawer.Screen name="List Scroll View" component={ListScrollView} />
      <Drawer.Screen name="Flat List View" component={FlatListView} />
      <Drawer.Screen name="Section List View" component={SectionListView} />
      <Drawer.Screen name="InputText Example" component={InputTextComp} />
      <Drawer.Screen name="Switch Toggle" component={SwitchToggle} />
      <Drawer.Screen name="Login Form" component={LoginForm} />
      <Drawer.Screen name="Refresh Flat list Items" component={PullOnRequest} />
    </Drawer.Navigator>
  );
};

export default drawerNavigation;
