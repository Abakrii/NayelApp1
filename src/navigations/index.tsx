import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreensElements} from './utils';
import {HeaderStyle} from './styles';
const Stack = createStackNavigator();
const NavigationStack = () => {
  const screenElementsArray = ScreensElements();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screenElementsArray.map(item => {
          const {name, component} = item;
          return (
            <Stack.Screen
              name={name}
              component={component}
              options={HeaderStyle}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
