import React, {Component} from 'react';

require('console-polyfill');

import './app.less'
import topImg from './../images/topImg.png'
import colNews from './../images/col-news.jpg'
import colCultural from './../images/col-cultural.jpg'
import colEvents from './../images/col-events.jpg'
import colh1    from './../images/col(6).jpg'
class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render = ()=> {

        return (
            <div className="App">
                <div className="topBar">
                    <img src={topImg}/>
                </div>

                <div className="topList">
                    <ul>
                        <li><span>东秦与我</span></li>
                        <li>
                            <span>校庆动态</span>
                        </li>
                        <li><span>校友与基金</span></li>
                        <li><span>教学科研</span></li>
                        <li><span>创新创业</span></li>
                    </ul>
                </div>

                <div className="footer">
                    <div className="about-web"><h1>关于本站</h1>
                        <li><a href="#"> 更新日志</a></li>
                        <li><a href="#"> 制作团队</a></li>
                        <li><a href="#"> 服务信箱</a></li>
                        <li><a href="#"> 联系我们</a></li>
                    </div>
                    <div className="about-touch">
                        <h1>联系我们</h1>
                        <li><a href="#">校长信箱</a></li>
                        <li><a href="#">工作机会</a></li>
                        <li><a href="#">本科生招生</a></li>
                        <li><a href="#">本科生就业</a></li>
                    </div>
                    <li className="otherInfo">
                        <p> Copyright ©Northeast University At Qinhuangdao 秦ICP备-10088665 Powered By WebPlus
                            公安备案号:32010202010062</p>
                    </li>
                </div>
            </div>
        )
    }
}

export default AppComponent;
