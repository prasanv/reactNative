import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const About = (prop: any) => {
  return (
    <SafeAreaView style={[styles.safeAreaViewContainer]}>
      <View style={[styles.container]}>
        <Text style={styles.text}>About</Text>
        <Text style={styles.text}>
          Parameter passed by Home screen: {prop.route.params.name}
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

export default About;
