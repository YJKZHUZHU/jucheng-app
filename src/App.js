import React, { Component,Fragment } from 'react';
import {Button} from 'antd-mobile'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index.js'
import './index.scss'

import Home from './views/Home/Home';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header></Header>
            <Route path="/" exact component={Home} />
          </Fragment>
        </Router>
      </Provider>
     
    );
  }
  componentDidMount() {
    
  }
}

export default App;
