import React,{Component} from 'react';
import MenuItem from './menuitem';
import ClientInfoTab from  '../tabs/clientinfotab';
import AftercreditInfoTab from '../tabs/aftercreditinfotab';
import GuaranteeInfoTab from '../tabs/guaranteeinfotab';

export default class MenuContainer extends Component{
    constructor(){
        super();
        this.state={
            menuarray:[]
        }
    }
    componentWillMount(){
        this.setState({
            menuarray:['客户信息','抵押物信息','贷后信息']
            //menuarray:[<ClientInfoTab/>,<GuaranteeInfoTab/>,<AftercreditInfoTab/>]
        })
        console.log('componentWillMount')
    }

    render(){
        return (
            <div className='menu-container'>
                {this.state.menuarray.map((item,i)=><MenuItem menuitemname={item} key={i} /> )}
            </div> 
        )
    }
}