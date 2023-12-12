/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const DimensionsWithEventListeners = () => {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
    screen: Dimensions.get('screen'),
  });

  console.log({dimensions});

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', arg => {
      // console.log({arg});
      setDimensions(old => {
        return {
          ...old,
          window: arg.window,
          screen: arg.screen,
        };
      });
    });
    return () => subscription?.remove();
  });

  const {window, screen} = dimensions;

  const newWindowWidth = window.width;
  const newWindowHeight = window.height;
  const newScreenHeight = screen.height;

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.box,
          {
            width: newWindowWidth > 750 ? '80%' : '50%',
            height: newWindowHeight > 390 ? '80%' : '50%',
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              fontWeight: newScreenHeight > 390 ? '900' : '400',
            },
          ]}>
          Dynamic Screens
        </Text>
      </View>
    </View>
  );
};

// const screenWidth = Dimensions.get('screen').width;
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
    // fontWeight: screenWidth > 390 ? '900' : '400',
    textAlign: 'center',
  },
});

export default DimensionsWithEventListeners;
