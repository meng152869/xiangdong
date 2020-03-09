import React, { Component } from 'react'
import axios from 'axios'
import './detail.scss'
class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: {
                designer: {
                    fields: {
                        // designer
                        // designer
                    }
                }
            }
        }
        // console.log(props)
        // console.log(props.location.state.pk)
    }
    render() {
        return (
            <div className="Detail">
                <div className="D-total">
                    <section>
                        <div className="Det-top">
                            <h2>{this.state.obj.title}</h2>
                            <small>来源：九创装饰  浏览次数：100次 更新时间：{this.state.obj.update_time}</small>
                            <ul>
                                <li>
                                    <h3>{this.state.obj.case_style}</h3>
                                    <span>案例风格</span>
                                </li>
                                <li>
                                    <h3>{this.state.obj.case_type}</h3>
                                    <span>案例户型</span>
                                </li>
                                <li>
                                    <h3>{this.state.obj.case_area}</h3>
                                    <span>案例面积</span>
                                </li>
                                <li>
                                    <h3>{this.state.obj.floor_name}</h3>
                                    <span>楼盘名称</span>
                                </li>
                                <li>
                                    <h3>{this.state.obj.case_city}</h3>
                                    <span>所在城市</span>
                                </li>
                                <li>
                                    <h3>{this.state.obj.designer.fields.name}</h3>
                                    <span>设计师</span>
                                </li>
                            </ul>
                        </div>
                        <div className="Det-en">
                            <img src={this.state.obj.designer.fields.pic} />
                            <div>
                                <h3>{this.state.obj.designer.fields.name}</h3>
                                <small>{this.state.obj.designer.fields.job_title}</small>
                                <p>经验：{this.state.obj.designer.fields.exp}年</p>
                                <p>擅长风格:{this.state.obj.designer.fields.good_at}</p>
                                <button>找他设计</button>
                            </div>
                        </div>
                    </section>
                    <section >
                        
                           <h1>{this.state.obj.title}-效果图</h1>    
                          <div dangerouslySetInnerHTML={{__html:this.state.obj.content}}></div> 
                    </section>

                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.match.params);
        axios.get('http://www.zhongzi-oa.com:89/case_detail/?cid=' + this.props.match.params.pk).then((resp) => {
            console.log(resp)
            this.setState({
                obj: resp.data.data.fields
            })
            console.log(this.state.obj)
        }).catch((err) => {
            console.log(err)
        })
    }
}
export default Detail;