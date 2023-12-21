/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Box from './custom/box';

const Flex = () => {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: 'green'}}>Item 1</Box>
      <Box style={{backgroundColor: 'red'}}>Item 2</Box>
      <Box style={{backgroundColor: 'orange'}}>Item 3</Box>
      <Box style={{backgroundColor: 'blue'}}>Item 4</Box>
      <Box style={{backgroundColor: 'violet'}}>Item 5</Box>
      <Box style={{backgroundColor: 'pink'}}>Item 6</Box>
      <Box style={{backgroundColor: 'grey'}}>Item 7</Box>
      <Text style={{backgroundColor: 'yellow', padding: 20}}>Text 8</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'baseline',
    flexWrap: 'wrap',
    marginTop: 60,
    borderWidth: 6,
    borderColor: 'purple',
  },
});

export default Flex;
