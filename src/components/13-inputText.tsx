import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const InputTextComp = () => {
  const [textInputValue, setTextInputValue] = useState('');

  const onChangeTextCallback = (e: any) => {
    setTextInputValue(e);
    console.log({e, textInputValue});
  };

  // IMPORTANT NOTE: click `c,d=shift+k` to view and hide the keyboard in the iPhone
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.field]}>
        <Text style={[styles.label]}>Enter your Name:</Text>
        <TextInput
          style={[styles.input]}
          value={textInputValue}
          onChangeText={e => onChangeTextCallback(e)}
          placeholder="Krishna Vasudev"
          placeholderTextColor="#999"
          // NOTE: Change the boolean value to see the change in the app
          secureTextEntry={false}
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text>My name is {textInputValue}</Text>
      </View>
      <Text style={[styles.label]}>Enter your Comments:</Text>
      <TextInput
        style={[styles.multilineInput]}
        placeholder="message"
        multiline
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginHorizontal: 10,
  },
  field: {
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
  },
  input: {
    borderColor: 'darkgrey',
    borderWidth: 3,
    height: 40,
    padding: 4,
    fontSize: 15,
  },
  multilineInput: {
    borderColor: 'darkgrey',
    borderWidth: 3,
    height: 100,
    padding: 4,
    fontSize: 15,
    textAlignVertical: 'top',
  },
});

export default InputTextComp;
