import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const PullOnRequest = () => {
  return (
    <SafeAreaView style={[styles.safeAreaViewContainer]}>
      <View style={[styles.container]}>
        <Text style={styles.text}>Hello!</Text>
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

export default PullOnRequest;
