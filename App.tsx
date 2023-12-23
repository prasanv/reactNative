/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './src/screens/about';
import Contact from './src/screens/contact';
import {Pressable, Text} from 'react-native';

// import HelloWorld from './src/components/1-helloWorld';
// import Alert from './src/components/2-alert';
// import Styling from './src/components/3-styling';
// import Flex from './src/components/4-flex';
// import Layout from './src/components/5-layout';
// import Dimensions from './src/components/6-dimensions';
// import DimensionsWithEventListeners from './src/components/6-dimensionsEventListener';
// import DimensionsHook from './src/components/6-dimensionsHook';
// import SafeAreaViewAPI from './src/components/7-safeAreaView';
// import PlatformSpecificCode from './src/components/8-platformSpecificCode';
// @ts-ignore
// import PlatformSpecificFile from './src/components/8-platformSpecificFiles/8-platformSpecificFile';
// import PokemanChars from './src/components/9-pokemanChars';
// import ListScrollView from './src/components/10-listScrollView';
// import FlatListView from './src/components/11-flatList';
// import SectionListView from './src/components/12-sectionList';
// import InputTextComp from './src/components/13-inputText';
// import SwitchToggle from './src/components/14-switchToggle';
// import LoginForm from './src/components/15-loginForm';
// import PullOnRequest from './src/components/16-pullOnRequest';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // return <HelloWorld />;
  // return <Alert />;
  // return <Styling />;
  // return <Flex />;
  // return <Layout />;
  // return <Dimensions />;
  // return <DimensionsWithEventListeners />;
  // return <DimensionsHook />;
  // return <SafeAreaViewAPI />;
  // return <PlatformSpecificCode />;
  // return <PlatformSpecificFile />;
  // return <PokemanChars />;
  // return <ListScrollView />;
  //  return <FlatListView />;
  // return <SectionListView />;
  // return <InputTextComp />;
  // return <SwitchToggle />;
  // return <LoginForm />;
  // return <PullOnRequest />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: '#6a51ae'},
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <Pressable
              onPress={() => {
                // eslint-disable-next-line no-alert
                return alert('Menu button is pressed');
              }}>
              <Text style={{color: 'white', fontSize: 16}}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {backgroundColor: '#e8e4f3'},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'My home', // Setting the header title
          }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen
          name="Contact"
          component={Contact}
          initialParams={{
            country: 'Canada',
            province: 'BC',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
