/**
 * Created by Rachel on 2017/4/6.
 */
import React , {Component} from 'react'
import './home.less'
import colNews from './../../images/col-news.jpg'
import colCultural from './../../images/col-cultural.jpg'
import colEvents from './../../images/col-events.jpg'
import colh1    from './../../images/col(6).jpg'
class Home extends Component{
    render() {
        return (
            <div className="home-wrapper">
                <div className="main">
                    <div className="col-1-topNews">
                        <span><img src={colNews}/>东秦要闻<td>Top News</td>
                          <p>河北民族师范学院张淑玲副校长来校考察交流</p>
                             <p>财经处成功举办网上预约报账系统培训</p>
                              <p>第四期宣传思想理论工作坊顺利召开</p>
                             <p>青年之声•讲述青春故事—名家讲师活动顺利举行</p>
                              <p>我校17年青年马克思主义者培训开班典礼顺利举行</p>
                          <p>万人计划领军人才邢飞校友与你共话激光创业梦</p>
                            </span>
                    </div>
                    <div className="col-2-topNews">
                        <span><img src={colCultural}/>文化活动<td>Cultural Activities</td>
                        <p>继续教育学院组织学习高校思想政治工作会议精神</p>
                        <p>艺术学院新学期班导师工作部署研讨会举行</p>
                        <p>材料学院举办缅怀先烈纪念活动</p>
                        <p>机器人学院党支部开展首次党日活动</p>
                            <p>孙雷讲授党风廉政建设专题党课</p>
                             <p>"机器人学院赴沈阳新松机器人股份有限公司调研"</p>
                            </span>

                    </div>
                    <div className="col-3-topNews">
                        <span><img src={colEvents}/>近期活动<td>Top News</td>
                        <p>赵继会见日本国驻沈阳总领事石塚英树一行</p>
                        <p>"软件学院“大数据实验班”正式开课"</p>
                        <p>"工商管理学院商英启晨计划启动"</p>
                        <p>"东北大学春季就业双向选择洽谈会举行"</p>
                            <p>东北大学开展东北大学开展“学习总书记讲话做合格共青团员”教育实践</p>
                        </span>
                    </div>
                </div>
                <div className="more">
                    <li><img src={colh1}/>校园美景</li>
                    <div className="all">
                        <div className="rolling-picture1"></div>
                        <div className="rolling-picture2"></div>
                        <div className="rolling-picture3"></div>
                        <div className="rolling-picture4"></div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Home;