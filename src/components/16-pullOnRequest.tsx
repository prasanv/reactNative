/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, FlatList, Platform, SafeAreaView} from 'react-native';
const axios = require('axios').default;

const PullOnRequest = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState('1');
  const [refreshing, setRefreshing] = useState(false);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`,
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        data={data}
        renderItem={(prop: any) => {
          // console.log(prop.item);
          return (
            <View style={[styles.card]} key={prop.index}>
              <View style={[styles.cardWrapper]}>
                <Image
                  style={{width: 150, height: 200}}
                  source={{
                    uri: `${prop.item.download_url}`,
                  }}
                />
                <Text style={styles.text}>By - {prop.item.author}</Text>
              </View>
            </View>
          );
        }}
        onRefresh={() => {
          setRefreshing(true);
          const pageNumber = (Math.random() * (99 - 1 + 1) + 1)
            .toFixed()
            .toString();
          setPage(pageNumber);
          console.log({page});
          setRefreshing(false);
        }}
        refreshing={refreshing}
        ListHeaderComponent={<Text style={styles.text}>Random Dog Images</Text>}
        ListFooterComponent={<Text style={styles.text}>End of the List.</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'lightgrey',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 28,
    margin: 8,
    padding: 5,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 2},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  cardWrapper: {
    padding: 10,
  },
  text: {
    margin: 8,
  },
});

export default PullOnRequest;
