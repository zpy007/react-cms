import React,{Component} from 'react';
import MenuItem from './menuitem';
import ClientInfoTab from  '../tabs/clientinfotab';
import AftercreditInfoTab from '../tabs/aftercreditinfotab';
import GuaranteeInfoTab from '../tabs/guaranteeinfotab';
import './menustyle.css'

export default class MenuContainer extends Component{
    constructor(){
        super();
        this.state={
            menuItem:[]
        }
    }
    componentWillMount(){
        this.setState({
            menuItem: [
                { "title": "clientinfotab", "titleLang": "客户信息","target":<ClientInfoTab/>}, 
                { "title": "guaranteeinfotab", "titleLang": "抵押物信息", "target":<GuaranteeInfoTab/>}, 
                { "title": "aftercreditinfotab", "titleLang": "贷后信息", "target":<AftercreditInfoTab/>}
            ]
        })
        console.log('componentWillMount')
    }

    render(){
        return (
            <div className='menu-container'>
                {
                    this.state.menuItem.map((item,i)=><MenuItem menuItem={item} key={i} /> )
                }
            </div> 
        )
    }
}