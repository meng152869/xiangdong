import React, { Component } from 'react'
import './work.scss'
import axios from 'axios'
import {withRouter } from 'react-router-dom'
class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workArr: []
        }
    }
    render() {
        return (
            <div className="Work">
                <h1>家装案例品鉴</h1>
                <small>10余种潮流家装风格，数万套精品案例作品，设计师精心点评，让您快速找到家装灵感</small>
                <span></span>
                <ul>
                    <li>现代简约</li>
                    <li>欧式古典</li>
                    <li>新中式</li>
                    <li>法式</li>
                    <li>北欧</li>
                    <li>美式乡村</li>
                    <li>全部</li>
                </ul>
                <div className="Work-items">
                    {this.state.workArr.map((item, index) => {
                        return (
                            index !== 0 ?

                                <section key={index} onClick={()=>{
                                    this.routTo(item.pk)
                                }}>
                                    <img src={item.fields.pic} />
                                    <p><span>{item.fields.case_type}</span><span>{item.fields.case_style}</span><span>{item.fields.count}平方米</span></p>
                                </section>
   
                                : null
                        )
                    })}
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get("http://www.zhongzi-oa.com:89/case_recommend/").then((resp) => {
            console.log(resp)
            this.setState({
                workArr: resp.data.data
            })
            console.log(this.state.workArr)
        }).catch((err) => {
            console.log(err)
        })
    }
    routTo=(v)=>{
        console.log(v)
        console.log(this)
        this.props.history.push('/detail/' + v)
    }
}
// export default Work;
export default withRouter(Work)