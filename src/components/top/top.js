import React , {Component} from 'react'
import './top.scss'
import {Icon} from 'antd'
class Top extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Top">
                <div className="Top-headerTop">
                    <section>
                    <span><Icon type="home" style={{'marginRight':'10px'}}></Icon>郑州</span>
                    <span>免费家装大礼包在线赠送</span>
                    </section>
                 </div>
                 <div className="Top-headerBtm">
                     {/* <img src=""/> */}
                     <h1>向东家装</h1>
                     <div className="Top-searchBox">
                         <input type="text" placeholder="请输入您要搜索的内容"/>
                         <button>搜索</button>
                     </div>
                     <div className="Top-phone">
                        <section>
                            <h3>手机24小时在线</h3>
                            <h1>敬请预约</h1>
                        </section>
                        <Icon type="phone" style={{'fontSize':'25px','marginTop':'20px'}}/>
                     </div>   
                 </div>   
            </div>
        )
    }
}
export default Top;