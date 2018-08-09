import React,{Component} from 'react'
import TableContainer from '../table/tablecontainer';


export default class ClientInfoTab extends Component{
    render(){
        return (
            <div>
                <span>客户信息选项卡</span>
                <div>
                    <div><span>【搜索框】搜索按钮</span></div>
                    <div><span>数据表[姓名|身份证号|地址|电话|授信额度|期限|用途]</span></div>
                    <div><span>分页</span></div>
                </div>
                <div className="table">
                    <TableContainer Columns={[
                        { field: "clientname", title: "姓名" },
                        { field: "clientid", title: "身份证号" },
                        { field: "clientaddress", title: "地址" },
                        { field: "clientamount", title: "授信额度" },
                        { field: "clientlimit", title: "期限" },
                        { field: "clientusage", title: "用途" }
                        ]} />
                </div>
            </div>
        )
    }
}