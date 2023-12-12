import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Box = ({children, style}) => {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    zIndex: 2,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default Box;
