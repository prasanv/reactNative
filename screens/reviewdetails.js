import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { globalStyles, images } from "../styles/globalStyles";
import Card from '../shared/Card';
import BackgroundImage from '../shared/backgroundImage';

export default function reviewdetails({navigation}) {
  const r = images.ratings[navigation.getParam('rating')]

  return (
    <BackgroundImage>
      <View style={globalStyles.container}>
        <Card>
          <Text style={globalStyles.titleText}>{ navigation.getParam('title') }</Text>
          <Text style={styles.body}>{ navigation.getParam('body') }</Text>
          {/* <Text style={styles.body}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text> */}
          <View style={styles.rating}>
            <Text style={styles.ratingText} >GameZone Ratings: </Text>
            <Image source={r}></Image>
          </View>
        </Card>
      </View>
    </BackgroundImage>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  ratingText:{
    fontSize: 16,
  }, 
  body:{
    marginVertical: 10,
    textAlign: 'justify',
  }
})
