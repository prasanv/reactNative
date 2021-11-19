import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Formik } from "formik";
import { TextInput } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/globalStyles';
import * as yup from "yup";
import FlatButton from '../shared/button';
import BackgroundImg from '../shared/backgroundImage';

const reviewSchemaValidation = yup.object().shape({
  'title': yup.string().required().min(4),
  'body': yup.string().required().min(8),
  'rating': yup.string()
    .max(1)
    .test('is-num-1-5','Rating must be a number 1 to 5', (val)=>{
      return parseInt(val) < 6 && parseInt(val) > 0
    })
});


export default function reviewForm({onSubmitCallback}) {
  return (
  <BackgroundImg>
    <Text style={styles.reviewHeading}> Add your Review</Text>
    <View style={styles.container}>
      <Formik
        initialValues={{title:'', body:'', rating:''}}
        onSubmit={(values, actions)=>{
          actions.resetForm();
          onSubmitCallback(values);
        }}
        validationSchema={reviewSchemaValidation}
      >
        {(formikProps) => (
          <View>
          <TextInput
              style={globalStyles.input}
              placeholder='Game Title...'
              placeholderTextColor="#999"
              multiline={true}
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            ></TextInput>  
            <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Review Comments...'
              placeholderTextColor="#999"
              multiline
              minHeight={80}
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur('body')}
            ></TextInput>
            <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>
            <TextInput
              style={globalStyles.input}
              placeholderTextColor="#999"
              placeholder='Game Ratings (1-5) '
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              onBlur={formikProps.handleBlur('rating')}
              keyboardType='numeric'
            ></TextInput>
            <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>
            <FlatButton 
              buttonText="SUBMIT"
              onPressHandler={formikProps.handleSubmit}  
            ></FlatButton>
          </View>
        )}
      </Formik>
    </View>
  </BackgroundImg>
  )
}


const styles = StyleSheet.create({
  reviewHeading:{
    textAlign: 'center',
    fontSize: 20,
    color: 'maroon',
    marginBottom: 20,
  },
})
