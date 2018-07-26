import React,{Component} from 'react'
import MenuItem from './menuitem';

export default class MenuContainer extends Component{
    
    render(){
        return (
            <div className='menu-container'>
                <MenuItem menuitemname='目录项1'/>
            </div> 
        )
    }
}