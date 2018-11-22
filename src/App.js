import React, { Component } from 'react';
import {Button} from 'antd-mobile'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index.js'
import './index.scss'
import './style/base.scss';
import WrappedNormalLoginForm from './container/login/login';
import NormalLoginForm from './container/register/register';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path='/login' component={WrappedNormalLoginForm}></Route>
            <Route path='/register' component={NormalLoginForm}></Route>
          </div>
        </Router>
      </Provider>
     
    );
  }
  componentDidMount() {
    
  }
}


export default App;
