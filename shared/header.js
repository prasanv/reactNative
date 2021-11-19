import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

export default function Header({navigation}) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}></Image>
        <Text style={globalStyles.titleText}> GameZone! </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // headerText: {
  //   fontWeight: '800',
  //   fontSize: 24,
  //   color: 'red',
  //   letterSpacing: 1
  // },
  icon:{
    position: 'absolute',
    right: 210,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: 'row',
  }
})
