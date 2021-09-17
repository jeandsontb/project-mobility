import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StateProvider} from './src/context/StateContext';

import HomeStack from './src/stacks/HomeStack';

const App = () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;
