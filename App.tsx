import {View, Text} from 'react-native';
import React from 'react';
import Navigator from './src/navigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
