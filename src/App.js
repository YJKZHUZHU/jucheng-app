import React, { Component } from 'react';
import {Button} from 'antd-mobile'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index.js'
import Home from './views/Home/index'
import Tour from './views/Tour/Tour.js'
import './index.scss'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            
            
            <Route exact path='/' component={Home} ></Route>
            <Route path='/Tour/moreTourShowList' component={Tour}></Route>
          </div>
        </Router>
      </Provider>
     
    );
  }
  componentDidMount() {
    
  }
}

export default App;
