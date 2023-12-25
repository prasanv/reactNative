import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/Navigation/drawerNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}

export default App;
