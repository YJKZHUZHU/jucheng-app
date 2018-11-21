import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route} from 'react-router-dom';
// import App from './App';
import './style/base.scss';
import Action from './views/Action/Action';
import Ticket from './views/ticket';


ReactDOM.render( <Router>
    <Fragment>
        <Route path="/action"  component={Action}/>
        <Route path="/ticket/:sid"  component={Ticket}/>
    </Fragment>
</Router>, document.getElementById('root'));