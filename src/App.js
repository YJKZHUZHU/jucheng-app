import React, { Component,Fragment } from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index.js'
import Action from './views/Action/Action';
import Ticket from './views/ticket';
import './index.scss'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
         <Fragment>
            <Route path="/action"  component={Action}/>
            <Route path="/ticket/:sid"  component={Ticket}/>
         </Fragment>
        </Router>
      </Provider>
     
    );
  }
  componentDidMount() {
    
  }
}

export default App;
