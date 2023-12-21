/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Box from './custom/box';

const Layout = () => {
  return (
    <View style={styles.container}>
      <Box
        style={{
          backgroundColor: 'green',
          width: 100,
          top: 20,
          left: 50,
          zIndex: 2,
        }}>
        Item 1
      </Box>
      <Box style={{backgroundColor: 'red', width: 100}}>Item 2</Box>
      <Box style={{backgroundColor: 'orange', width: 100}}>Item 3</Box>
      <Box
        style={{
          backgroundColor: 'blue',
          width: 100,
          position: 'absolute',
          top: 130,
          left: 80,
        }}>
        Item 4
      </Box>
      <Box style={{backgroundColor: 'violet', width: 100}}>Item 5</Box>
      <Box style={{backgroundColor: 'pink', width: 100}}>Item 6</Box>
      <Box style={{backgroundColor: 'grey', width: 100}}>Item 7</Box>
      <Text
        style={{
          backgroundColor: 'yellow',
          color: 'black',
          width: 100,
          padding: 20,
          textAlign: 'center',
        }}>
        Text 8
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    borderWidth: 5,
    borderColor: 'purple',
  },
});

export default Layout;
