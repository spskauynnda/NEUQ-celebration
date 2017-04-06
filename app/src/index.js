import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react'
import AppComponent from './components/app';
import {Router,Route,hashHistory}from 'react-router'
import culturallife from './components/culturallife/culturallife'
import Home from './components/Home/Home'
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
            <Route path="/cultural" component={culturallife}/>
        </Route>
    </Router>), document.getElementById('app')
);
            //<IndexRoute component={Home}/>
