import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react'
import AppComponent from './components/app';
import {Router,Route,hashHistory}from 'react-router'
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
        </Route>
    </Router>), document.getElementById('app')
);