import React, { Component } from 'react';
import {Button} from 'antd-mobile'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index.js'
import './index.scss'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Button type='primary'>聚橙网</Button>
            <div className='hahha'>样式匹配，放心使用</div>
          </div>
        </Router>
      </Provider>
     
    );
  }
  componentDidMount() {
    
  }
}

export default App;
