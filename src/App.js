import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'

// import login from ''


import Home from './views/Home/Home';
import Action from './views/Action/Action';
import Search from './views/Search/Search';
import Location from './views/Location/Location';
import Tour from './views/Tour/Tour.js'
import Order from './views/Order/Order'

import './style/base.scss';
import WrappedNormalLoginForm from './container/login/login';
import NormalLoginForm from './container/register/register';
import My from './views/My/store/my';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>

          <Fragment>

            <div style={{ height: "1.88rem", lineHeight: "1.88rem" }} className='header-none'>&nbsp;</div>

            <Route path="/Action" exact component={Action} />
            <Route path="/Search" exact component={Search} />
            <Route path="/Location" exact component={Location} />
            <Route path='/Tour/moreTourShowList' component={Tour}></Route>
            <Route path='/Order/Order' component={Order}></Route>
            <Route exact path='/login' component={WrappedNormalLoginForm}></Route>
            <Route path='/register' component={NormalLoginForm}></Route>
            <Route path='/My' component={My}></Route>
            <Route path="/" exact component={Home} />

            <div style={{ height: "3rem", lineHeight: "3rem" }} className='footer-none'>&nbsp;</div>
          </Fragment>

        </Router>
      </Provider>

    );
  }
  componentDidMount() {

  }
}


export default App;
