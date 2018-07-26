import React,{Component} from 'react'
import MenuItem from './menuitem';

export default class MenuContainer extends Component{
    constructor(){
        super();
        this.state={
            menuarray:[]
        }
    }
    componentWillMount(){
        this.setState({
            menuarray:['客户信息','抵押物信息','贷后检查记录']
        })
        console.log('componentWillMount')
    }

    render(){
        return (
            <div className='menu-container'>
                
                {this.state.menuarray.map((item,i)=><MenuItem menuitemname={item} key={i}/> )}
                
            </div> 
        )
    }
}