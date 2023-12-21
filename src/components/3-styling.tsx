import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// NOTE: Check the notion page for more details

function Styling(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={[styles.lightBlueBox, styles.box]}>
        <Text>Box</Text>
      </View>
      <View style={[styles.box, styles.lightBlueBox]}>
        <Text>LightBlue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBox]}>
        <Text>LightBlue Box</Text>
      </View>
      <View style={[styles.box, styles.boxShadow, styles.androidShadow]}>
        <Text style={styles.textStyle}>Sample text</Text>
      </View>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style Inheritance on <Text style={styles.boldText}>React Native</Text>{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
  box: {
    width: '75%',
    height: 100,
    padding: 10,
    backgroundColor: 'pink',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 10,
  },
  lightBlueBox: {
    width: '100%',
    backgroundColor: 'lightblue',
  },
  lightGreenBox: {
    width: '50%',
    backgroundColor: 'lightgreen',
  },
  textStyle: {
    borderRadius: 50,
    backgroundColor: 'green',
  },
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 12,
  },
  darkMode: {
    backgroundColor: 'black',
    color: 'white', // this does not get applied in RN
  },
  darkModeText: {
    color: 'white',
  },
  boldText: {
    fontWeight: '600',
  },
});

export default Styling;
