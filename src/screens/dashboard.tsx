import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Dashboard = ({navigation}: any) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Settings" onPress={() => navigation.jumpTo('Settings')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Dashboard;
