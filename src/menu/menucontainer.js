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
            menuarray:['clientinfotab','guaranteeinfotab','aftercreditinfotab']
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