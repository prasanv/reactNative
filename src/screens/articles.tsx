import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Articles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Articles</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Articles;
