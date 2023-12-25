/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import scenery from '../assets/scenery.jpg';

function HelloWorld(): React.JSX.Element {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Image resizeMode="center" source={require('../assets/scenery.jpg')} />
      <Image
        style={{width: 150, height: 200}}
        source={{uri: 'https://picsum.photos/200/300'}}
      />
      <Pressable
        onPress={() => {
          console.log('Image is pressed');
        }}>
        <Image source={scenery} />
      </Pressable>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
  },
});

export default HelloWorld;
