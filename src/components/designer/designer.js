import React, { Component } from 'react'
import './designer.scss'
import axios from 'axios'
class Designer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DesArr: []
        }
    }
    render() {
        return (
            <div className="Designer">
                <h1>家装设计大师推荐</h1>
                <small>家装是一门科学，只有专业设计才能不辜负家的期望，选对设计师才能让您的家居生活大放异彩</small>
                <span></span>
                <ul>
                    <li>别墅</li>
                    <li>跃层</li>
                    <li>普通住宅</li>
                    <li>会所</li>
                    <li>一居室</li>
                    <li>二居室</li>
                    <li>全部</li>
                </ul>
                <div className="Des-items">
                    {this.state.DesArr.map((item, index) => {
                        return (

                            <section key={index}>
                                <img src={item.fields.pic} />
                                <p>
                                    {item.fields.about}
                                </p>
                                <div>
                                    <h3>{item.fields.name}</h3>
                                    <h5>{item.fields.job_title}</h5>
                                </div>
                            </section>

                        )
                    })}
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get('http://www.zhongzi-oa.com:89/designer/').then((resp) => {
            console.log(resp)
            this.setState({
                DesArr: resp.data.data
            })
            console.log(this.state.DesArr)
        }).catch((err) => {

        })
    }
}
export default Designer;