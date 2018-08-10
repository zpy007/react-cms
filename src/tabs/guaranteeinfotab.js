import React,{Component} from 'react'


export default class GuaranteeInfoTab extends Component{
    render(){
        return (
            <div>
                <span>抵押物信息选项卡</span>
                <div>
                    <div><span>【搜索框】搜索按钮</span></div>
                    <div><span>|数据表[借款人姓名|借款人身份证号|]</span></div>
                    <div><span>|___[抵押人姓名|抵押物证件编号|抵押物位置|]</span></div>
                    <div><span>|_____________|抵押物证件编号|抵押物位置|]</span></div>
                    <div><span>|___[抵押人姓名|抵押物证件编号|抵押物位置|]</span></div>
                    <div><span>|___[抵押人姓名|抵押物证件编号|抵押物位置|]</span></div>
                    <div><span>分页</span></div>
                </div>
            </div>
        )
    }
}