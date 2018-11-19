import React, { Component } from 'react';
import {Button} from 'antd-mobile'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import {Provider} from 'react-redux'
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Button type='primary'>enen</Button>
          </div>
        </Router>
      </Provider>
     
    );
  }
}

export default App;
