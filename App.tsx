import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import NavigationStack from './src/navigations';
import store from './src/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
};

export default App;
