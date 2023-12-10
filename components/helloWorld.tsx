/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import scenery from '../assets/scenery.jpg';

function HelloWorld(): React.JSX.Element {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="dark-content"
        hidden={isEnabled}
        //networkActivityIndicatorVisible={true} // iso only
      />
      <ActivityIndicator size="large" color="violet" animating={isEnabled} />
      <Text>
        Use the below toggle switch to hide/show Status Bar and Activity
        Indicator
      </Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Pressable
        onPress={() => {
          console.log('Image is pressed');
        }}>
        <Image source={scenery} />
      </Pressable>
      {/* <Image source={{uri: 'https://picsum.photos/200/300'}} /> */}
      <Button
        title="Press me"
        onPress={() => {
          console.log('button pressed');
          setModalVisibility(true);
        }}
        color="#841584"
      />
      <Modal
        visible={modalVisibility}
        // transparent={true}
        onRequestClose={() => setModalVisibility(false)}
        animationType="slide"
        presentationStyle="pageSheet">
        <View style={{backgroundColor: 'lightblue', flex: 1, padding: 20}}>
          <Text style={{flex: 1}}>Hello from the modal!</Text>
          <Button
            title="close"
            onPress={() => setModalVisibility(false)}
            color="midnightblue"
          />
        </View>
      </Modal>
      <Text style={{fontSize: 24, padding: 20}}>
        Hello Prasan! Welcome to React Native
      </Text>
      <Pressable
        // Additional distance outside of this view in which a press is detected.
        hitSlop={10}
        onLongPress={() => {
          console.log('text is long pressed');
        }}
        onPressOut={() => {
          console.log('function is called onPressOut');
        }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
});

export default HelloWorld;
