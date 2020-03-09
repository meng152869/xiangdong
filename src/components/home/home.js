import React, { Component } from 'react'
import './home.scss'
import Work from '../work/work'
import Discover from '../discovery/discover'
import Banner from '../banner/banner'
import Designer from '../designer/designer'
import one from '../../assets/img/banner/one.jpeg'
import two from '../../assets/img/banner/two.jpeg'
import { Icon } from 'antd'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgArr: [one, two]
        }
    }
    render() {
        return (
            <div className="Home">
                <Banner imgArr={this.state.imgArr} />
                <div className="App-form">
                    <h3>免费获取报价</h3>
                    <form>
                        <input type="text" name="name" placeholder="您的称呼" />
                        <input type="text" name="mobile" placeholder="您的联系方式" />
                        <input type="text" name="local" placeholder="小区/楼盘名称" />
                        <input type="text" name="mianji" placeholder="房屋面积" />
                        <button type="submit">免费获取报价</button>
                    </form>
                </div>
                <div className="App-act">
                    <section>
                        <ul>
                            <li>
                                <Icon type="bank" style={{ fontSize: '35px', color: '#111' }} />
                                <section>
                                    <h1>优惠活动</h1>
                                    <small>参与优惠活动享装修大惊喜</small>
                                </section>
                            </li>
                            <li>
                                <Icon type="car" style={{ fontSize: '35px', color: '#111' }} />
                                <section>
                                    <h1>免费专车</h1>
                                    <small>简单预约优享专车接您到店</small>
                                </section>
                            </li>
                            <li>
                                <Icon type="insurance" style={{ fontSize: '35px', color: '#111' }} />
                                <section>
                                    <h1>免费上房验房</h1>
                                    <small>验房师为您排除家装隐患</small>
                                </section>
                            </li>
                            <li>
                                <Icon type="property-safety" style={{ fontSize: '35px', color: '#111' }} />
                                <section>
                                    <h1>家装贷款</h1>
                                    <small>让您的美好家具梦想一步到位</small>
                                </section>
                            </li>
                        </ul>
                    </section>
                </div>
                <Work></Work>
                <Designer></Designer>
                <Discover></Discover>
               
            </div>
        )
    }
}
export default Home;