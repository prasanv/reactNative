/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    let errors: any = {};
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      setErrors({});
      setUsername('');
      setPassword('');
    }
  };
  // console.log(errors);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 230 : 350}
      style={[styles.container]}>
      <View style={[styles.form]}>
        <View style={[styles.imageWrapper]}>
          <Image
            resizeMethod="auto"
            blurRadius={1}
            source={require('../assets/scenery.jpg')}
            style={{height: 475}}
          />
        </View>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        {errors?.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        {errors?.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        <Button
          onPress={() => handleFormSubmit()}
          title="Login"
          color="darkblue"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  imageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
  },
});
export default LoginForm;
