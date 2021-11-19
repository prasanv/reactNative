import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function backgroundImage({children}) {
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.bg}>
      {children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})
