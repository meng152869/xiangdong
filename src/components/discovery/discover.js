import React, { Component } from 'react'
import './discover.scss'
import axios from 'axios'
import yipi from '../../assets/img/discover/yipin.jpg'
import jc from '../../assets/img/discover/jc.jpg'
import {Icon} from 'antd'
class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DiscArr: [
                {
                    img: yipi,
                    name: '壹品整装',
                    anli: 120,
                    gondi: 60,
                    phone: '17716339577',
                    local: '夏邑县津桥学校西100路北'
                },
                {
                    img: jc,
                    name: '九创装饰',
                    anli: 460,
                    gondi: 280,
                    phone: '17716339577',
                    local: '夏邑县龙湖明珠西区北门'
                }
            ]
        }
    }
    render() {
        return (
            <div className="Discover">
                
                <h1>线下体验馆</h1>
                <small>我们为您提供整体家装咨询服务，专业设计师为您免费规划家装</small>
                <span></span>
                <div className="DisC-items">
                    {this.state.DiscArr.map((item, index) => {
                        return (

                            <section key={index}>
                                <img src={item.img} />
                                <div>
                                    <h1><Icon type="calendar" />{item.name}</h1>
                                    <p><span>设计案例: {item.anli}</span>|<span>装修工地: {item.gondi}</span></p>
                                    <p><Icon type="phone" /><span>联系电话:{item.phone}</span></p>
                                    <p><Icon type="radar-chart" />{item.local}</p>
                                    <hr/>
                                    <h2>预约到店，向专业设计师<span style={{color:'red'}}>免费家装规则</span></h2>
                                    <form>
                                        <input type="text" placeholder="您的名字"/>
                                        <input type="text" placeholder="您的手机号"/>
                                        <input type="text" placeholder="小区名字"/>
                                        <button type="submit">立即预约</button>
                                    </form>
                                </div>
                            </section>

                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Discover;