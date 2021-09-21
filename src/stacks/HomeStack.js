import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Status from '../screens/Status';
import Tracking from '../screens/Tracking';

const StackNavigator = createStackNavigator();

export default () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Status"
        component={Status}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Tracking"
        component={Tracking}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
};
