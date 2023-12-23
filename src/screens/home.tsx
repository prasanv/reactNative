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
        <Text style={styles.headerText}>Home Screen Content</Text>
        <Button
          title="About"
          onPress={() => navigation.navigate('About', {name: 'PrasanV'})}
        />
        <Button
          title="Contact"
          onPress={() =>
            navigation_2.navigate(
              screenName as never,
              {location: 'Vancouver'} as never,
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
  headerText: {
    fontSize: 36,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    padding: 5,
  },
});

export default Home;
