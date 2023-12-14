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
              <View style={{borderWidth: 1, marginVertical: 8}} />
            ) : null;
          }}
          ListEmptyComponent={<Text>Sorry, No Item Found.</Text>}
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
});
export default FlatListView;
function separator(): React.ReactElement<any, any> | null {
  throw new Error('Function not implemented.');
}
