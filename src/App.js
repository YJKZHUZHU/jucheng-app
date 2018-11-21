import React, { Component } from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index.js'
import Home from './views/Home/index'
import Tour from './views/Tour/Tour.js'
import Search from './views/Home/Search/Search'
import Seleted from './views/Home/Selected/Seleted'
import './index.scss'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            
            
            <Route exact path='/' component={Home} ></Route>
            <Route path='/Tour/moreTourShowList' component={Tour}></Route>
            <Route path='/search/index' component={Search}></Route>
            <Route path='/index/selectCity' component={Seleted}></Route>
          </div>
        </Router>
      </Provider>
     
    );
  }
  componentDidMount() {
    
  }
}

export default App;
