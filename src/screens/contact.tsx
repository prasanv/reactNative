import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';

const Contact = ({route, navigation}: any) => {
  const {location, country, province, info, name} = route.params;

  // NOTE: useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
  useLayoutEffect(() => {
    if (name) {
      navigation.setOptions({
        title: `${name} Contact`,
      });
    } else {
      navigation.setOptions({
        title: 'My Contact',
      });
    }
  }, [navigation, name]);

  return (
    <SafeAreaView style={[styles.safeAreaViewContainer]}>
      <View style={[styles.container]}>
        <Text style={styles.headerText}>Contact Screen Content</Text>
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

export default Contact;
