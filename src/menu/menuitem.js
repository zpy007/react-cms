import React,{Component} from 'react'

export default class MenuItem extends Component{
    handleMenuItemClick(){
        console.log('menuitem clicked')
    }
    render(){
        return(
            <div className='menu-item' onClick={()=>{this.handleMenuItemClick()}}>
                <span>{this.props.menuitemname}</span> 
            </div> 
        )
    }
}