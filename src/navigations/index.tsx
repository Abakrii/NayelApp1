import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PreSubmition, AfterSubmition} from '../features';
import {PRE_SUBMITION, POST_SUBMITION} from './config';
import {HEADER_STYLE_OBJECT} from '../core/constants/headerStyleObj';
const Stack = createStackNavigator();
const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={PRE_SUBMITION}
          component={PreSubmition}
          options={HEADER_STYLE_OBJECT}
        />
        <Stack.Screen
          name={POST_SUBMITION}
          component={AfterSubmition}
          options={HEADER_STYLE_OBJECT}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
