/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {SafeAreaView, SectionList, StyleSheet, Text, View} from 'react-native';
import categorizedPokemanList from '../data/categorizedPokemanList.json';

// IMPORTANT NOTE: Input data used for displaying the section list should have required `data` key array,
// if not the then section list will throw error

const SectionListView = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.scrollView}>
        <SectionList
          sections={categorizedPokemanList}
          renderItem={({item, index}: any) => {
            return (
              <View style={[styles.card]} key={index}>
                <Text style={[styles.text]}>{item?.name}</Text>
              </View>
            );
          }}
          renderSectionHeader={(prop: {section: {type: any}}) => {
            console.log(prop);
            return <Text style={[styles.header]}>{prop.section.type}</Text>;
          }}
          ItemSeparatorComponent={() => (
            <View
              style={{borderWidth: 1, marginVertical: 8, borderColor: 'red'}}
            />
          )}
          SectionSeparatorComponent={() => (
            <View
              style={{borderWidth: 3, marginVertical: 8, borderColor: 'green'}}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cream',
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

export default SectionListView;
