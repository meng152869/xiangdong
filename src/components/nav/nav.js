import React, { Component } from 'react'
import { Route, HashRouter, Link, Switch,withRouter } from 'react-router-dom'

import Home from '../home/home'
import Hall from '../hall/hall'
import Team from '../team/team'
import Case from '../case/case'
import Notfound from '../notfound/notfound'
import Detail from '../../components/detail/detail'
import './nav.scss'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={
            active:''
        }
    }
    render() {
        return (
            <div className="Nav">
                <HashRouter>
                    <nav className="app-nav">
                        <ul>
                            <li className={this.state.active == '' ? 'active' :''} >
                                <Link to="/" onClick={()=>{this.click('')}}>首页</Link>
                            </li>
                            <li className={this.state.active == 'case' ? 'active' :''} >
                                <Link to="/case" onClick={()=>{this.click('case')}}>装修案例</Link>
                            </li>
                            <li className={this.state.active == 'team' ? 'active' :''} >
                                <Link to="/team" onClick={()=>{this.click('team')}}>服务团队</Link>
                            </li>
                            <li className={this.state.active == 'hall' ? 'active' :''} >
                                <Link to="/hall" onClick={()=>{this.click('hall')}}>线下体验馆</Link>
                            </li>
                            <li>
                                <span>快速报价</span>
                            </li>
                        </ul>
                    </nav>
                    {/* <> */}
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/case" component={Case}></Route>
                        <Route exact path="/team" component={Team}></Route>
                        <Route exact path="/hall" component={Hall}></Route>
                        <Route exact path="/detail/:pk" component={Detail}></Route>
                        <Route component={Notfound}></Route>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
    click=(b)=>{
       this.setState({
           active:b })
    }
}
export default Nav;