import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Root from './src/Root';

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
)