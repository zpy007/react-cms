import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class MenuItem extends Component{
    static contextTypes={
        openedTab:PropTypes.array,
        activeTab:PropTypes.string
    }
    handleMenuItemClick(item){
        console.log('menuitem clicked')
        console.log(this.context.openedTab);
        //判断相应选项卡是否存在
            
        if(this.context.openedTab.includes(item))
        {
            //如果存在就切换到相应选项卡
            console.log("选项卡存在，已切换")
        }
        else{
            //如果不存在就创建选项卡，并切换。
            this.context.openedTab.push(item)
            console.log("选项卡不存在，插入选项卡，并切换")
        }
        this.context.activeTab=item;
        console.log(this.context.openedTab);            
    }
    render(){
        return(
            <div className='menu-item' onClick={()=>{this.handleMenuItemClick(this.props.menuitemname)}}>
                <span>{this.props.menuitemname}</span> 
            </div>   
        )
    }
}