import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Styling(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <Text>LightBlueBox</Text>
      </View>
      <View>
        <Text>LightBlueBox</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
});

export default Styling;
