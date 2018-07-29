import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class MenuItem extends Component{
    static contextTypes={
        openedTab:PropTypes.array,
        activeTab:PropTypes.string,
        _insertTab:PropTypes.func
    }
    _insertTab(item){
        //App组件动态添加一个tab
        console.log("MenuItem::_inertTab");
        this.context._insertTab(item);
    }
    _activeTab(item){
        //切换到相应的tab
        //tem的 className为显示 其他的itemclass为隐藏
    }
    handleMenuItemClick(item){
        console.log('menuitem clicked')
        console.log(this.context.openedTab);
        //判断相应选项卡是否存在
        var eitem;
        /*switch(item){
            case '客户信息':
                eitem='clientinfotab';
                break;
            case '抵押物信息':
                eitem='guaranteeinfotab';
                break;
            case '贷后信息':
                eitem='aftercreditinfotab';
                break;
            default:
                eitem='clientinfotab';
                break;
        }*/    
        if(this.context.openedTab.includes(item))
        {
            //如果存在就切换到相应选项卡
            console.log("选项卡存在，已切换")
            this._activeTab(item);
        }
        else{
            //如果不存在就创建选项卡，并切换。
            
            console.log("选项卡不存在，插入选项卡，并切换")
            this._insertTab(item);
            //this._changeTab();
            this._activeTab(item);
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