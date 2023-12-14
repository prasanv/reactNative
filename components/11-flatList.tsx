import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import pokemanList from '../data/pokemanList.json';

const FlatListView = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        style={styles.scrollView}
        data={pokemanList}
        renderItem={prop => {
          console.log(prop);
          return (
            <View style={[styles.card]} key={prop.index}>
              <Text style={[styles.text]}>{prop.item.type}</Text>
              <Text style={[styles.text]}>{prop.item.name}</Text>
            </View>
          );
        }}
        // change the value in the below line to view vertical list
        horizontal={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
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
export default FlatListView;
