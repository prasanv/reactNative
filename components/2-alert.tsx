/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View, Alert} from 'react-native';

function AlertAPI(): React.JSX.Element {
  return (
    <View style={{flex: 1, padding: 20}}>
      <Button title="Alert" onPress={() => Alert.alert('Invalid Data')} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert('Invalid Data', 'Cancel')}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert('Invalid Data', 'DOB incorrect', [
            {
              text: 'cancel',
              onPress: () => console.log('cancel pressed'),
            },
            {
              text: 'OK',
              onPress: () => console.log('OK pressed'),
            },
            {
              text: 'Update',
              onPress: () => console.log('Update pressed'),
            },
            // NOTE: Android can only have 3 buttons for alert api, iOS doesn't have a limit on alert buttons
            {
              text: 'Dismiss',
              onPress: () => console.log('Dismiss pressed'),
            },
          ])
        }
      />
    </View>
  );
}

export default AlertAPI;
