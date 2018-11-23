import React, { Component,Fragment } from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index.js'
import './index.scss'

import Home from './views/Home/Home';
import Action from './views/Action/Action';
import Search from './views/Search/Search';
// import My from './views/My/My';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>

            <div style={{height:"1.88rem",lineHeight:"1.88rem"}}>&nbsp;</div>
            
            <Route path="/Action" exact component={Action} />
            {/* <Route path="/My" exact component={My} /> */}
            <Route path="/Search" exact component={Search} />
            <Route path="/" exact component={Home} />

            <div style={{height:"3rem",lineHeight:"3rem"}}>&nbsp;</div>
          </Fragment>
        </Router>
      </Provider>
     
    );
  }
  componentDidMount() {
    
  }
}

export default App;
