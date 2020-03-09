import React, { Component } from 'react'
import { Icon } from 'antd'
import $ from 'jquery'
import './banner.scss'
class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgarr: [],
            num: 1,
            timer: null
        }
    }
    render() {
        return (
            <div className="Banner" onMouseOver={this.banover} onMouseOut={this.banOut}>
                <ul style={{ width: this.state.imgarr.length * 100 + "%" }} ref="ul">
                    {this.state.imgarr.map((item, index) => {
                        return (
                            <li key={index}>
                                <img src={item} />
                            </li>
                        )
                    })}
                </ul>
                <div className="Ban-circle">
                    {this.state.imgarr.map((item, index) => {
                        return (
                            index < this.state.imgarr.length - 2 ?
                                <span className={index === this.state.num - 1 ? "Ban-active" : ''} key={index}></span> : null
                        )
                    })}
                </div>
                <span className="left" onClick={this.left}>
                    <Icon type="left-circle" style={{ fontSize: '30px', color: 'rgba(0,0,0,0.3)' }} />
                </span>
                <span className="right" onClick={this.right}>
                    <Icon type="right-circle" style={{ fontSize: '30px', color: 'rgba(0,0,0,0.3)' }} />
                </span>
            </div>
        )
    }
    componentDidMount() {
        this.props.imgArr.push(this.props.imgArr[0])
        this.props.imgArr.unshift(this.props.imgArr[1])
        this.setState({
            imgarr: this.props.imgArr
        })
        this.state.timer = setInterval(() => {
            // console.log(this)
            this.right()
        }, 2500)
       

    }
    componentWillUnmount(){
        clearInterval(this.state.timer);
        // clearTimeout(this.pwdErrorTimer);
        // clearTimeout(this.userNameErrorTimer);
    }
    left = () => {
        this.setState({
            num: this.state.num - 1
        }, () => {
            $(this.refs.ul).css({
                transform: 'translate(' + ((-1) * this.state.num) / this.state.imgarr.length * 100 + "%" + ')',
                transition: '.5s'
            })
            if (this.state.num <= 0) {
                this.setState({
                    num: this.state.imgarr.length - 2
                }, () => {
                    setTimeout(() => {
                        $(this.refs.ul).css({
                            transform: 'translate(' + ((-1) * this.state.num) / this.state.imgarr.length * 100 + "%" + ')',
                            transition: 'none'
                        })
                    }, 500)
                })
            }
        })
    }
    right = () => {
        // var lNum;
        this.setState({
            num: this.state.num + 1
        }, () => {
            $(this.refs.ul).css({
                transform: 'translate(' + ((-1) * this.state.num) / this.state.imgarr.length * 100 + "%" + ')',
                transition: '.5s'
            })
            if (this.state.num >= this.state.imgarr.length - 1) {
                this.setState({
                    num: 1
                }, () => {
                    setTimeout(() => {
                        $(this.refs.ul).css({
                            transform: 'translate(' + ((-1) * this.state.num) / this.state.imgarr.length * 100 + "%" + ')',
                            transition: 'none'
                        })
                    }, 500)
                })
            }
        })
       



    }
    banover = ()=>{
        clearInterval(this.state.timer)
    }
    banOut = ()=>{
        this.setState({
            timer:setInterval(() => {
                // console.log(this)
                this.right()
            }, 2500)
        })
    }
}
export default Banner;