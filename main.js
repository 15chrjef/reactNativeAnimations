import Exponent from 'exponent';
import React from 'react';
import Router from './navigation/Router'
import {
  NavigationProvider,
} from '@exponent/ex-navigation';

import App from './components/App.js'

class AppContainer extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <App {...this.props}/>
      </NavigationProvider>
    );
  }
}

Exponent.registerRootComponent(AppContainer);
