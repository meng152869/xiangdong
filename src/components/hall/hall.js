import React,{Component} from 'react'
import './hall.scss'
import Discover from '../discovery/discover'
// import Discover from './'
class Hall extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="Hall">
                <Discover/>
            </div>
        )
    }
}
export default Hall;