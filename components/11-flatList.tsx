/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import pokemanList from '../data/pokemanList.json';

// const pokemanList: ArrayLike<any> | null | undefined = [];

const FlatListView = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <FlatList
          style={styles.scrollView}
          data={pokemanList}
          renderItem={prop => {
            return (
              <View style={[styles.card]} key={prop.index}>
                <Text style={[styles.text]}>{prop.item.type}</Text>
                <Text style={[styles.text]}>{prop.item.name}</Text>
              </View>
            );
          }}
          // change the value in the below line to view vertical list
          horizontal={false}
          keyExtractor={item => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={item => {
            console.log(item);
            return item.leadingItem.id % 2 === 0 ? (
              <View
                style={{borderWidth: 1, marginVertical: 8, borderColor: 'red'}}
              />
            ) : null;
          }}
          ListEmptyComponent={<Text>Sorry, No Item Found.</Text>}
          ListHeaderComponent={<Text style={styles.header}>Pokemon List</Text>}
          ListFooterComponent={
            <Text style={styles.header}>End of the List.</Text>
          }
        />
      </View>
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
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    margin: 5,
    textAlign: 'center',
  },
});

export default FlatListView;
