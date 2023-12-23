import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';

const Contact = ({route, navigation}: any) => {
  const {location, country, province, info} = route.params;
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
        {info && (
          <Text style={styles.text}>
            This info will be populated only if you navigate for the About
            screen. Here is parameter passed by About screen: {info}
          </Text>
        )}
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
