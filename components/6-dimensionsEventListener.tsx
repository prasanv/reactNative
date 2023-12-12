/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const DimensionsWithEventListeners = () => {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  });

  console.log({dimensions});

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', arg => {
      // console.log({arg});
      setDimensions({window: arg?.window});
    });
    return () => subscription?.remove();
  });

  const {window} = dimensions;

  const newWindowWidth = window.width;
  const newWindowHeight = window.height;

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.box,
          {
            width: newWindowWidth < 392 ? '50%' : '85%',
            height: newWindowHeight > 800 ? '80%' : '50%',
          },
        ]}>
        <Text style={styles.text}>Dynamic Screens</Text>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('screen').width;
// const screenHeight = Dimensions.get('screen').height;
// console.log({screenWidth, screenHeight});

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// console.log({windowWidth, windowHeight});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box: {
    // width: windowWidth < 392 ? '50%' : '85%',
    // height: windowHeight > 800 ? '80%' : '50%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: screenWidth > 390 ? '900' : '400',
    textAlign: 'center',
  },
});

export default DimensionsWithEventListeners;
