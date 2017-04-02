import React, {Component} from 'react';

require('console-polyfill');

import './app.less'
import topImg from './../images/topImg.png'
class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render =()=> {
        return (
            <div className="App">
                <div className="topBar">
                    <img src={topImg}/>
                </div>
                <div className="nav">
                    <ul>
                        <li className="nav-item">
                            <span>东秦与我</span>
                        </li>
                        <li className="nav-item">
                            <span>校庆动态</span>
                        </li>
                        <li className="nav-item">
                            <span>校友与基金</span>
                        </li>
                    </ul>
                </div>
                <div className="main"></div>
                <div className="more"></div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default AppComponent;
