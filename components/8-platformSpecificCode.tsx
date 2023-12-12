import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform} from 'react-native';

const PlatformSpecificCode = () => {
  console.log(Platform.OS);

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
    backgroundColor: Platform.OS === 'android' ? 'orange' : 'lightgreen',
  },
  text: {
    ...Platform.select({
      ios: {
        fontSize: 50,
        color: 'black',
        fontWeight: '200',
        textAlign: 'left',
        padding: 10,
      },
      android: {
        fontSize: 50,
        color: 'black',
        fontWeight: '800',
        textAlign: 'center',
      },
    }),
  },
});

export default PlatformSpecificCode;
