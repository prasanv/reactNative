import React, {useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

const SwitchToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <StatusBar
          backgroundColor="lightgreen" // Android only
          barStyle="dark-content" // iOS only for Android above API 23
          hidden={isEnabled}
          networkActivityIndicatorVisible={true} // iso only
        />
        <Text>
          Use the below toggle switch to hide/show Status Bar and Activity
          Indicator
        </Text>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{false: 'green', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : 'red'}
            ios_backgroundColor="plum"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <ActivityIndicator size="large" color="violet" animating={isEnabled} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    padding: 10,
  },
  switchContainer: {
    flexDirection: 'row',
  },
});

export default SwitchToggle;
