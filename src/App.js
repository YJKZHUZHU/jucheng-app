import React, { Component,Fragment} from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/index.js';
import './index.scss';


import TourShowinfo from './views/TourShowinfo/Info';
import Ticket from './views/Ticket/Ticket';
import Price from './views/price/price';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path='/TourShowinfo' component={TourShowinfo}></Route>
            <Route path='/Ticket' component={Ticket}></Route>
            <Route path='/price' component={Price}></Route>
          </Fragment>
        </Router>
      </Provider>
     
    );
  }
  componentDidMount() {
    
  }
}

export default App;
