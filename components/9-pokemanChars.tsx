/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import pokemanChars from '../data/pokemanDetails.json';

const pokemanCharacters = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView style={[styles.scrollView]}>
        {pokemanChars?.map((item, index) => {
          return (
            <View style={[styles.card]} key={index}>
              <View style={styles.cardHeader}>
                <Text style={[styles.headerText]}>{item.name}</Text>
                <Text style={[styles.text]}>❤️HP: {item.hp}</Text>
              </View>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={{uri: `http://localhost:8081${item.image}`}}
              />
              <View style={styles.typeContainer}>
                <View style={styles.typeWrapper}>
                  <Text style={[styles.text, {fontSize: 23}]}>
                    {item.emoji}
                  </Text>
                  <Text style={[styles.typeText, styles.text, {fontSize: 20}]}>
                    {item.type}
                  </Text>
                </View>
              </View>
              <View style={styles.marginWrapper}>
                <Text style={[styles.text, styles.details]}>
                  Moves: {item.moves.join(', ')}
                </Text>
                <Text style={[styles.text, styles.details]}>
                  Weakness: {item.weaknesses.join(', ')}
                </Text>
              </View>
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
    backgroundColor: 'lightgrey',
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 28,
    marginVertical: 8,
    paddingVertical: 5,
    paddingLeft: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 9,
  },
  marginWrapper: {
    marginVertical: 18,
  },
  typeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeWrapper: {
    marginBottom: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'grey',
    borderRadius: 18,
    paddingVertical: 7,
    paddingHorizontal: 9,
  },
  typeText: {
    paddingLeft: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  details: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default pokemanCharacters;
