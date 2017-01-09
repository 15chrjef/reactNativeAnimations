import Exponent from 'exponent';
import React from 'react';
import Router from './navigation/Router'
import reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducers, {});
import {
  NavigationProvider,
} from '@exponent/ex-navigation';

import App from './components/App.js'

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationProvider router={Router}>
          <App {...this.props}/>
        </NavigationProvider>
      </Provider>
    );
  }
}

Exponent.registerRootComponent(AppContainer);
