import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import pokemanList from '../data.json';

const ListScrollView = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView style={[styles.scrollView]}>
        {pokemanList?.map(item => {
          return (
            <View style={[styles.card]}>
              <Text style={[styles.text]}>{item.type}</Text>
              <Text style={[styles.text]}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  card: {
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 8,
    paddingVertical: 5,
    paddingLeft: 5,
  },
});
export default ListScrollView;
