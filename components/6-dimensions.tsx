import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const DimensionsAPI = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.box]}>
        <Text style={styles.text}>Hello!</Text>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
console.log({screenWidth, screenHeight});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log({windowWidth, windowHeight});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box: {
    width: windowWidth < 392 ? '40%' : '85%',
    height: windowHeight > 800 ? '80%' : '50%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 50,
    color: 'black',
    fontWeight: screenWidth > 390 ? '900' : '400',
    textAlign: 'center',
  },
});

export default DimensionsAPI;
