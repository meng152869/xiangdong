import React, { Component } from 'react'
import './case.scss'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class Case extends Component {
    constructor(props) {
        super(props)
        this.state = {
            types: [],
            styles: [],
            cases: [],
            style: '',
            type: ''
        }
    }
    render() {
        return (
            <div className="Case">
                <ul>
                    <li className={this.state.type == "" ? 'Case-act' : ''} onClick={() => { this.typeChange('') }}>全部</li>
                    {this.state.types.map((t, i) => {
                        return (
                            <li key={i} className={this.state.type == t.fields.name ? 'Case-act' : ''} onClick={() => { this.typeChange(t.fields.name) }}>
                                {t.fields.name}
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    <li className={this.state.style == "" ? 'Case-act' : ''} onClick={() => { this.styleChange('') }}>全部</li>
                    {this.state.styles.map((t, i) => {
                        return (
                            <li key={i} className={this.state.style == t.fields.name ? 'Case-act' : ''} onClick={() => { this.styleChange(t.fields.name) }}>
                                {t.fields.name}
                            </li>
                        )
                    })}
                </ul>
                <div>
                    {this.state.cases.map((t, i) => {
                        return (
                            <section key={i} onClick={() => { this.detail(t.pk) }}>
                                <img src={t.fields.pic} />
                                <div>
                                    <img src={t.fields.designer.fields.pic} />
                                    <section>
                                        <h3>{t.fields.title}</h3>
                                        <p><span>{t.fields.case_type}</span><span>{t.fields.case_style}</span><span>{t.fields.case_area}平方米</span></p>
                                        <button>找TA设计</button>
                                    </section>
                                </div>
                            </section>

                        )
                    })}
                </div>
            </div>
        )
    }
    componentDidMount() {
        axios.get("http://www.zhongzi-oa.com:89/cstyle/").then((resp) => {
            console.log(resp)
            this.setState({
                styles: resp.data.data
            })
        }).catch((err) => {

        })
        axios.get("http://www.zhongzi-oa.com:89/ctype/").then((resp) => {
            console.log(resp)
            this.setState({
                types: resp.data.data
            })
        }).catch((err) => {

        })
        axios.get(`http://www.zhongzi-oa.com:89/case/?cstyle=&ctype=`).then((resp) => {
            console.log(resp)
            this.setState({
                cases: resp.data.data
            })
        }).catch((err) => {

        })
    }
    typeChange = (t) => {
        console.log(t)
        this.setState({
            type: t
        }, () => {
            axios.get('http://www.zhongzi-oa.com:89/case/?cstyle=' + this.state.style +'&ctype=' + this.state.type).then((resp) => {
                console.log(resp)
                this.setState({
                    cases: resp.data.data
                })
            }).catch((err) => {

            })
        })
    }
    styleChange = (s) => {
        this.setState({
            style: s
        }, () => {
            axios.get('http://www.zhongzi-oa.com:89/case/?cstyle=' + this.state.style +'&ctype=' + this.state.type).then((resp) => {
                console.log(resp)
                this.setState({
                    cases: resp.data.data
                })
            }).catch((err) => {

            })
        })
    }
    detail = (pk) => {
        this.props.history.push('/detail/' + pk)
    }
}
export default withRouter(Case);