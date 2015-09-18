import React, { findDOMNode, Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';

import { reduxRouteComponent } from 'redux-react-router';
import store from '../store/configureStore';
const RouteComponent = reduxRouteComponent(store);


class App extends Component {

    render(){
      return (
        <div>
        heyyyy
      </div>
      )
    }
  }

export default App;
