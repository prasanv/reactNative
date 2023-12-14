import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const pokemanCharacters = () => {
  return (
    <View style={[styles.container]}>
      <Text>Pokeman chars</Text>
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
export default pokemanCharacters;
