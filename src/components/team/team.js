import React, { Component } from 'react'
import './team.scss'
import axios from 'axios'
import price from '../../assets/img/price.jpg'
class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamArr: []
        }
    }
    render() {
        return (
            <div className="Team">
                <img src={price}/>
                <div className="TeamBox">
                {
                    this.state.teamArr.map((team, index) => {
                        return (
                            <section key={index}>
                                <img src={team.fields.pic} />
                                <p><span>看TA的案例</span><span>找TA设计</span></p>
                                <div>
                                    <h4>{team.fields.name}<span>{team.fields.job_title}</span></h4>
                                    <p>从业经验：{team.fields.exp}</p>
                                    <p>擅长分割：{team.fields.good_at}</p>

                                    <p>擅长户型：{team.fields.house_type}</p>
                                    {/* good_at: "后现代 美式 新中式" */}

                                    {/* house_type */}
                                </div>
                            </section>
                        )
                    })
                }
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.state.teamArr)
        axios.get('http://www.zhongzi-oa.com:89/designer/').then((resp) => {
            console.log(resp)
            this.setState({
                teamArr: resp.data.data
            })
            console.log(this.state.teamArr)
        }).catch(err => {
            console.log(err)
        })
    }
}
export default Team;