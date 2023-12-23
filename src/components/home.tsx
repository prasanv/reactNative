import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';

// IMPORTANT NOTE:
// Method 1: navigation.navigate('Name of te screen from the Stack.Navigator'),
//           use this method if are with in the screen component (i.e. component mentioned under the Stack.Navigator)
// Method 2: useNavigation hook, use this if want to navigate from the any component, so use only if ti is necessary

const Home = ({navigation}: any) => {
  const navigation_2 = useNavigation();
  const screenName = 'Contact';
  return (
    <SafeAreaView style={[styles.safeAreaViewContainer]}>
      <View style={[styles.container]}>
        <Text style={styles.text}>Home</Text>
        <Button
          title="About"
          onPress={() => navigation.navigate('About', {name: 'prasanv'})}
        />
        <Button
          title="Contact"
          onPress={() =>
            navigation_2.navigate(
              screenName as never,
              {location: 'vancouver'} as never,
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 50,
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default Home;
