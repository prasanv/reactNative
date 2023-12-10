import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import scenery from './assets/scenery.jpg';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={scenery} />
      <Image source={{uri: 'https://picsum.photos/200/300'}} />
      <Button title="Press me" onPress={() => console.log('button pressed')} />
      <Text>Hello Prasan! Welcome to React Native</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
});

export default App;
