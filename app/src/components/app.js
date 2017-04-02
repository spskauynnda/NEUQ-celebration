import React, {Component} from 'react';

require('console-polyfill');

import './app.less'
class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render =()=> {

        return (
            <div className="App">
                hello world
            </div>
        )
    }
}

export default AppComponent;
