import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';

const About = (prop: any) => {
  return (
    <SafeAreaView style={[styles.safeAreaViewContainer]}>
      <View style={[styles.container]}>
        <Text style={styles.headerText}>About Screen Content</Text>
        <Text style={styles.text}>
          Parameter passed by Home screen: {prop.route.params.name}
        </Text>
        <Button
          title="Navigate to Contact Screen"
          onPress={() => {
            prop.navigation.navigate('Contact', {
              info: 'About PrasanV Contact Info',
              name: prop.route.params.name,
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
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

export default About;
