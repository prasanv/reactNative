import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from "../styles/globalStyles";
import Card from '../shared/Card';
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from '../screens/reviewForm';
import BackgroundImage from '../shared/backgroundImage';


export default function home({navigation}) {
  const [modalOpenStatus, setModalOpenStatus] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', key: '3' },
  ]);

  const onPressHandler = (item) => {
    navigation.navigate('Review', item);
  }

  const addNewReview = (newReviewObj) => {
    const newKey = Math.random().toString();
    newReviewObj.key = newKey;
    const newArray = [newReviewObj, ...reviews]
    setReviews(newArray);
    
    // alternative way of writing
    //  setReviews((currentReview) => {
    //    return [...currentReview, newReviewObj]
    //  });

    setModalOpenStatus(false);
  }

  return (
    <BackgroundImage>
      <Modal visible={modalOpenStatus} animationType='slide' style={styles.modal}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <MaterialIcons 
              name='close' 
              size={36} 
              onPress={()=> (setModalOpenStatus(false))} 
              style={styles.closeIcon} 
            />
            <ReviewForm onSubmitCallback={addNewReview}></ReviewForm>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={globalStyles.container}>
      <MaterialIcons 
        name='add' 
        size={36} 
        onPress={()=> (setModalOpenStatus(true))} 
        style={styles.addIcon} 
      />
      <FlatList 
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=> onPressHandler(item)}>
            <Card>
              <Text style={globalStyles.titleHome}>{item.title}</Text>
            </Card>
          </TouchableOpacity> 
        )}
        keyExtractor={item => item.key}
      />
      </View>
    </BackgroundImage>
  )
}

const styles = StyleSheet.create({
  addIcon:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#333',
  },
  closeIcon: {
    // position: 'absolute',
    left: 330,
    paddingTop: 35,
    paddingBottom: 20,
  },
  content:{
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  modal: {
    flex: 1
  }
})