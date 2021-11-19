import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  titleText:{
    fontSize: 18,
    fontFamily: 'nunito-bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  titleHome: {
    fontSize: 18,
    fontFamily: 'nunito-bold',
    color: '#333',
  },
  bg:{
    width: '100%',
    height: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  errorText: {
    color: 'maroon',
    marginLeft: 25,
    textAlign: 'left',
    textTransform: 'capitalize'
  },
});


export const images= {
  ratings : {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
}