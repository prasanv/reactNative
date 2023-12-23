import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const Contact = ({route}: any) => {
  const {location, country } = route.params;
  return (
    <SafeAreaView style={[styles.safeAreaViewContainer]}>
      <View style={[styles.container]}>
        <Text style={styles.text}>Contact Screen</Text>
        <Text style={styles.text}>
          Parameter passed by Home screen: {location}
        </Text>
        <Text style={styles.text}>
          Initial parameter passed by "stack.navigator": {country}
        </Text>
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
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});

export default Contact;
