/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';

const DimensionsHook = () => {
  const updatedWindowWidth = useWindowDimensions().width;
  const updatedWindowHeight = useWindowDimensions().height;

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.box,
          {
            width: updatedWindowWidth > 750 ? '80%' : '50%',
            height: updatedWindowHeight > 390 ? '80%' : '50%',
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              fontWeight: '800',
            },
          ]}>
          Dynamic Screens
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});

export default DimensionsHook;
