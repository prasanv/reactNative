import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function FlatButton({buttonText, onPressHandler}) {

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'maroon',
    marginHorizontal: '15%',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
})
