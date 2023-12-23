import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';

const Contact = ({route, navigation}: any) => {
  const {location, country, province} = route.params;
  return (
    <SafeAreaView style={[styles.safeAreaViewContainer]}>
      <View style={[styles.container]}>
        <Text style={styles.headerText}>Contact Screen</Text>
        <Text style={styles.text}>
          Parameter passed by Home screen: {location}
        </Text>
        <Text style={styles.text}>
          Initial parameter passed by "stack.navigator": {province}, {country}
        </Text>
        <Button
          title="Update Province"
          onPress={() => navigation.setParams({province: 'British Columbia'})}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  headerText: {
    fontSize: 36,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    padding: 5,
  },
});

export default Contact;
