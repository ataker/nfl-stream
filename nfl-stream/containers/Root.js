import React, { Component, PropTypes } from 'react';
import { connect, Provider } from 'react-redux';
import store from '../store/configureStore';
import App from './App';
import rootReducer from '../reducers';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export default class Root extends Component {
  render() {
   
    return (

      <div>
        
        <Provider store={store}>
          {() => <App  />}
        </Provider>
        
        {/*
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor} />
        </DebugPanel>
      */}
      </div>
    );
  }
}